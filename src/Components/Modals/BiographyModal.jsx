import { Avatar, Chip, Modal } from "@mui/material"
import { useEffect, useState } from "react";
import strings from "../../localization";
import { renderFormDate } from "../../Utils/ValueFormatter";
import { AiOutlineClose } from "react-icons/ai";
import {getBiographyByNode} from '../../Services/Biography/BiographyService';
import { getChildrens, getParentAndSlibings } from "../../Services/Structure/StructureService";

const BiographyModal = ({childrens, setTrigger, trigger, matchedPerson}) => {
    const [index, setIndex] = useState(0);
    const childrensSize = childrens?.length;
    const [personBiography, setPersonBiography] = useState({});
    const [selectedChildren, setSelectedChildren] = useState(matchedPerson?.id);
    const [isSelected, setIsSelected] = useState(false);
    const [data, setData] = useState([]);
    const [parent, setParent] = useState([]);
    const [slibings, setSlibings] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(matchedPerson);
    const [childrensOfSelectedPerson, setChildrensOfSelectedPerson] = useState(matchedPerson?.children?.length > 0 ? matchedPerson.children : []);

    useEffect(() => {
        fetch();

        return () => {
            setData([]);
        }
    },[]);

    useEffect(() => {
        setPersonBiography(data[index])

        return () => {
            setPersonBiography({});  
        } 
    },[data,index])

    useEffect(() => {
        fetch();
        setSelectedPerson(matchedPerson);
        
        if(selectedPerson){
            getParentAndSlibings({...selectedPerson}).then(res => {
                if(!res || !res.ok) return;
                setParent(res.data.result);
                setSlibings(res.data.slibings);
            });

            getChildrens({...selectedPerson}).then(res => {
                if(!res || !res.ok) return;
                setChildrensOfSelectedPerson(res.data.childrens);
            })
            
        }
        return () => {
            setParent([]);
            setSlibings([]);
            setChildrensOfSelectedPerson([]);
            setSelectedPerson({});
        }
    },[selectedChildren])

    const fetch = () => {
        if(!selectedChildren) return;

        getBiographyByNode({id:selectedChildren}).then(res => {
            if(!res || !res.ok) return;
            setData(res.data.result);
        })
    }

    const renderChips = (data) => {
        if(!data) return;

        return data.map((e,key) => {
            return <Chip
            disabled={e?.id == selectedPerson?.id ? true: false}
            onClick={() => {setIsSelected(true); setSelectedChildren(e.id); setSelectedPerson(e)}}
            key={`children-chip-index-${key}`}
            avatar={<Avatar alt="pic" src={e?.photo} />}
            label={e?.firstName}
            variant="outlined"
            />
        })
    }

    const renderBiography = (children) => {
        if(!children){
            return <span className="no-result">{strings.pages.biography.noResult}</span>
        }

        return <div className="person-container">
                <div className="left">
                    <div className="top">
                        <img className="image" src={children?.sheets?.photo ? children?.sheets?.photo : '/images/profile-pic.webp'} />
                        <div className="right">
                            <span><strong>{strings.pages.sheets.firstName}</strong>:{children?.sheets?.firstName}</span>
                            <span><strong>{strings.pages.sheets.family}</strong>:{children?.sheets?.family?.familyName}</span>
                            <span><strong>{strings.pages.sheets.dateOfBirth}</strong>:{renderFormDate(children?.sheets?.dateOfBirth)}</span>
                            <span><strong>{strings.pages.sheets.dateOfDeath}</strong>:{renderFormDate(children?.sheets?.dateOfDeath) ? renderFormDate(children?.sheets?.dateOfDeath) : '/'}</span>
                            <div><strong>{strings.pages.sheets.address}</strong>:<a target={'_blank'} href={`https://maps.google.com/?q=${children?.sheets?.address}`}>{children?.sheets?.address}</a></div>
                        </div>
                    </div>
                    {
                        typeof parent == 'object' && parent && <>
                        <label className="parent-label">{strings.pages.biography.parent}</label>
                        <div className="chip-container">
                            <Chip
                                onClick={() => {setIsSelected(true); setSelectedChildren(parent.id); setSelectedPerson(parent)}}
                                key={`children-chip-index-parent`}
                                avatar={<Avatar alt="pic" src={parent?.photo} />}
                                label={parent?.firstName}
                                variant="outlined"
                                />
                        </div>
                        </>
                    }
                   {
                    slibings?.length > 0 && <>
                        <label className="children-label">{strings.pages.biography.slibings}</label>
                        <div className="childrens">
                                {renderChips(slibings)}
                        </div>
                    </>
                   }
                    {
                        childrensOfSelectedPerson?.length > 0 && <><label className="children-label">{strings.pages.biography.childrens}</label>
                        <div className="childrens">
                                {renderChips(childrensOfSelectedPerson)}
                        </div></>
                   }
                    
                </div>
                <div className="person-right">
                   <div className="parent">

                   </div>
                   <div className="person-biography-container">
                        {children?.biographyDescription ? <span className="label">{strings.pages.biography.title}</span> : <></>}
                        <div className="biography-date">{`${strings.pages.biography.dateFrom} ${renderFormDate(children?.dateFrom)} ${children?.dateTo ? strings.pages.biography.dateEnd : ''} ${children?.dateTo ? renderFormDate(children?.dateTo) : ''}`}</div>
                        {children?.biographyDescription ? <span className="biography-desc">{children?.biographyDescription}</span> : <></>}
                        <span className="label" dangerouslySetInnerHTML={{__html: `${strings.pages.biography.spouseInformation} : ${children?.spouseInformation ? `<span class='no-bold'>${children?.spouseInformation}</span>` : <AiOutlineClose size={30} color='red' />}`}}></span>
                        {children?.graveMarker ? <span className="label">{strings.pages.biography.graveMarker} : <span className="no-bold">{children?.graveMarker}</span></span> : <></>}
                    </div>
                    
                </div>
            </div>
    
    }

    const renderModalFooter = (length) => {
        if(!length || length == 1) return;
        
        const numbers = [];
        for (let i = 0; i < length; i++) {
            numbers.push(<span onClick={() => setIndex(i)} key={i}>{i+1}</span>);
        }
        return <div className="footer-elements">{numbers}</div>;
    } 

    return (selectedPerson && <><Modal
        className="biography-modal"
        open={trigger}
        onClose={() => {setTrigger(false);setIsSelected(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <div className={'main-modal'}>
            <div onClick={() => {setTrigger(!trigger);setIsSelected(false)}} className="close">x</div>
            <div className="modal-body">
                {renderBiography(personBiography)}
            </div>
            {data?.length >= 2 ? <div className="modal-footer">
                {renderModalFooter(childrensSize)}
            </div> : <></>}
        </div>
    </Modal>

    {isSelected && data.length > 0 ? <BiographyModal  trigger={trigger} childrens={data} setTrigger={setTrigger}></BiographyModal> : <></>  }</>
    )

}

export default BiographyModal;