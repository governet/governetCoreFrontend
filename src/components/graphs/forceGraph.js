import React from "react";
import { runForceGraph } from "./forceGraphGenerator";
import styles from "./forceGraph.module.css";

export function ForceGraph({ linksData, nodesData, nodeHoverTooltip }) {
    const containerRef = React.useRef(null);
    console.log("OK FORECE GRAPH IS UP....")
    console.log(linksData, nodesData)
    React.useEffect(() => {
        let destroyFn;

        if (nodesData) {
            if (containerRef.current) {
                const { destroy } = runForceGraph(containerRef.current, linksData, nodesData, nodeHoverTooltip);
                destroyFn = destroy;
            }

            return destroyFn;
        }
    });

    return <div ref={containerRef} className={styles.container} />;
}

