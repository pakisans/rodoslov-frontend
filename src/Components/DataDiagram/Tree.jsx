import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { useState } from 'react';
import { getChildrens } from '../../Services/Structure/StructureService';
import {FaBook} from "react-icons/fa";
import { getBiographyByNode } from '../../Services/Biography/BiographyService';
import BiographyModal from '../Modals/BiographyModal';
import { useEffect } from 'react';
import { Collapse } from '@mui/material';
import { compareDatesAsc } from '../../Utils/DataUtil';

const Tree = ({root, setRootElement}) => {
  const [trigger, setTrigger] = useState(false);
  const [personBiography, setPersonBiography] = useState([]);
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState(root);
  const [selectedPerson, setSelectedPerson] = useState({});

  useEffect(() => {
    setItems(root)
  },[root])

  const fetchChildrens = (children, childrens) => {

    function addChildObject(obj, id, arrayOfChildrens) {
      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          addChildObject(obj[key], id, arrayOfChildrens.sort(compareDatesAsc));
          if (obj[key].id === id) {
            obj[key].children = arrayOfChildrens;
          }
        }
      }
      return obj;
    };

    getChildrens({children}).then(res => {
      setItems(addChildObject(childrens, children.id, res.data.childrens))
      setCounter(counter + 1);
    })
  }

  const TransitionComponent = (props) => {
    return <Collapse {...props} />
  }

  const renderTree = (nodes, item) => {
    return <div style={{display: 'flex', position: 'relative'}}>
      <TreeItem TransitionComponent={TransitionComponent} onClick={() => {
        if(item >= 0){
          fetchChildrens(nodes, items);
          // setExpanded([...expanded,String(nodes.id)])
        }
        }
        } key={nodes?.id} nodeId={String(nodes?.id)} label={nodes?.fullName}>
        {Array.isArray(nodes.children)
          ? nodes.children.map((node,item) => renderTree(node,item))
          : null}
          <span></span>
      </TreeItem>
           <FaBook style={{marginTop:'5px',cursor:'pointer',zIndex:'999999'}} onClick={() => {
            setSelectedPerson(nodes);
            getBiographyByNode(nodes).then(res => {
            if(!res || !res.ok) return;
            setPersonBiography(res.data.result);
            setTrigger(true);
          })}} size={30} />
    </div>
};

return <>
      { items &&
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
          {renderTree(items)}
        </TreeView> 
      }
        {trigger && <BiographyModal matchedPerson={selectedPerson} childrens={personBiography} setTrigger={setTrigger} trigger={trigger} />}
        </>
}

export default Tree;