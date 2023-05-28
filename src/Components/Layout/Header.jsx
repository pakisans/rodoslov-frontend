import strings from "../../localization";
import Tooltip from '@mui/material/Tooltip';
import LeftPanel from "./LeftPanel";
import { useCallback, useEffect, useState } from "react";
import { css } from '@emotion/css'
import { AiFillEye, AiOutlineSearch } from "react-icons/ai";
import { InputAdornment, TextField } from "@mui/material";
import debounce from "lodash/debounce";
import { getSearchTerms } from "../../Services/Base/BaseService";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { renderFormDate } from "../../Utils/ValueFormatter";
import BiographyModal from "../Modals/BiographyModal";
import { getBiographyByNode } from "../../Services/Biography/BiographyService";
import { getChildrens } from "../../Services/Structure/StructureService";
import { Close } from "@mui/icons-material";

const Header = () => {
    const [activeClass, setActiveClass] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState({});
    const [biographies, setBiographies] = useState([]);
    const [childrens, setChildrens] = useState([])
    const [isFetched, setIsFetched] = useState(false);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
      if(trigger){
        fetch();

        if(childrens?.length > 0){
          setSelectedPerson(selectedPerson, selectedPerson.children = [...childrens]);
        }
      }
    },[selectedPerson])

    useEffect(() => {
      if(childrens?.length > 0){
        setSelectedPerson(selectedPerson, selectedPerson.children = [...childrens]);
      }
    },[isFetched])


    useEffect(() => {
      if(!inputValue){
        setFetched(false);
      }
    },[inputValue])

    const fetch = () => {
      getBiographyByNode(selectedPerson).then(res => {
        if(!res || !res.ok) return;
        setBiographies(res.data.result)
      })
      getChildrens(selectedPerson).then(res => {
        if(!res || !res.ok) return;

        setChildrens(res.data.childrens);
        setIsFetched(!isFetched)
      })
    }

    const sendQuery = (query) => {
        if(!query) return;
        setIsSearchActive(true);
        getSearchTerms(query).then(res => {
            if(!res || !res.ok) return;
            setSearchData(res.data.result);
            setFetched(true);
        })
    };

  const delayedSearch = useCallback(
    debounce((q) => sendQuery(q), 600),
    []
  );

  const handleChange = (event) => {
    setInputValue(event.target.value)
    delayedSearch(event.target.value);
  };

  const renderNoResultText = () => {
    return <div className="no-result-text">
      <p className="paragraph">{strings.pages.base.noResultText}</p>
    </div>
  }

  const renderSearchResults = (data) => {
    if(!data || data?.length == 0) return;
    return data.map((e, key) => {
        return <Card key={`card-index-${key}`} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar src={e?.photo ? e.photo : '/images/profile-pic.webp'} sx={{ bgcolor: red[500] }} aria-label="recipe">
              
            </Avatar>
          }
         
          title={e.firstName + ' ' + e?.family?.familyName}
          subheader={renderFormDate(e.dateOfBirth) + ' - ' +  renderFormDate(e.dateOfDeath)}
        />
        <CardContent className="card-content-container">
          {e?.address ? <span className="address"><strong>{strings.pages.sheets.address}</strong>: <a target={"_blank"} href={e.address ? `https://maps.google.com/?q=${e?.address}` : ''}>{e?.address}</a></span> : <></>}
          <span className="family"><strong>{strings.pages.family.pageTitle}</strong>: {e?.family?.familyName}</span>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title={strings.pages.base.viewBiography}>
            <IconButton sx={{marginLeft:'auto'}} onClick={() => {setTrigger(true);setSelectedPerson(e)}} aria-label="add to favorites">
              <AiFillEye color="black" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    })
  }

    return <>
        <header className="header">
            <nav className="nav-bar">
                <Tooltip title={strings.header.navigation}><img src="/images/arrow-down.svg" onMouseOver={() => setActiveClass('active')} className={`arrow-down ${activeClass ? css`transform: rotate(180deg); &:hover{cursor: help;}` : null}`} /></Tooltip>
                <div id="1" className={`middle-group${isSearchActive ? ' search-active' : ''}`}>
                    <img src="/images/logo.png" />
                    <label className={`header-title`}>{strings.header.title}</label>
                    <img src="/images/logo.png" />
                </div>
                <div className="flex-align-center">
                {isSearchActive ? <TextField InputProps={{
                                    endAdornment: (
                                      <InputAdornment className="close-search" position="end">
                                        <IconButton onClick={() => {setInputValue('');setIsSearchActive(false);}}>
                                          <Close />
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }} onChange={handleChange}  onMouseOver={() => setIsSearchActive(true)} onMouseOut={() => {if(!inputValue)setIsSearchActive(false)}} id="standard-basic" label="Pretraga" variant="standard" /> : <></> }
                <AiOutlineSearch onMouseOver={() => setIsSearchActive(true)} onMouseOut={() => {if(!inputValue)setIsSearchActive(false)}} size={25} />
                </div>
            </nav>
        </header>
        <LeftPanel setActiveClass={setActiveClass} active={activeClass} />
        {inputValue && isSearchActive && <div className="search-result-container">
            <div className="search-result">
                {searchData?.length == 0 && fetched && renderNoResultText()}
                {renderSearchResults(searchData)}
            </div>
        </div>}
      {trigger  && <BiographyModal matchedPerson={selectedPerson} trigger={trigger} setTrigger={setTrigger} childrens={biographies}></BiographyModal>}
    </>
}

export default Header;