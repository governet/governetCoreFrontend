import React from 'react'
import { ForceGraph } from "./graphs/forceGraph";
import '../style/App.css';

/*
This wrapper class is used to ensure the Force Graph representing the candidate nodes is only rendered once, and with the correct data.
It wraps the ForceGraph function, which builds the graph and returns and SVG. Due to the nature of D3/React integration,
we need to ONLY render this component when we pass data to it the first time; otherwise, the SVG sticks around and is not deleted if we render it multiple times.
That's why we have the empty brackets [] as the callback on the forceGraph.js useEffect hook.
*/
const ForceGraphWrapper = ({ network }) => {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div><a target="_blank" href="http://127.0.0.1:8080/candidates/${node.id}">${node.name}</a></div>`;
  }, []);

  return (
    <div>
        <section>
        	{network.nodes && 
            <ForceGraph 
              linksData={network.links} 
              nodesData={network.nodes} 
              nodeHoverTooltip={nodeHoverTooltip} 
            />
        	}
        </section>
    </div>
  )
};

export default ForceGraphWrapper