import { useEffect } from "react";
import cytoscape from "cytoscape";

function NetworkVisualization() {
  useEffect(() => {
    const cy = cytoscape({
      container: document.getElementById("cy"),
      elements: [
        { data: { id: "a" } },
        { data: { id: "b" } },
        {
          data: {
            id: "ab",
            source: "a",
            target: "b",
          },
        },
      ],
      style: [
        {
          selector: "node",
          style: {
            shape: "hexagon",
            "background-color": "purple",
            label: "data(id)",
          },
        },
      ],
      layout: {
        name: "grid",
      },
    });

    document.getElementById("cy").firstChild.style.display = "flex";

    cy.nodes().on("click", function (event) {
      const node = event.target;
      console.log(`Clicked node: ${node.id()}`);
      if (node.isParent()) {
        if (node.collapsed()) {
          console.log(`Expanding node: ${node.id()}`);
          node.expand();
        } else {
          console.log(`Collapsing node: ${node.id()}`);
          node.collapse();
        }
      }
    });

    // Add event handler for displaying connection details on click
    cy.edges().on("click", function (event) {
      const edge = event.target;
      const details = `Connection details: ${edge.data(
        "source"
      )} -> ${edge.data("target")}`;

      alert(details); // For demonstration purposes
    });

    // Clean up the cytoscape instance when the component is unmounted
    return () => {
      cy.destroy();
    };
  }, []);

  return (
    <div
      id="cy"
      style={{
        width: "40%",
        height: "50%",
        position: "absolute",
        top: 180,
        left: 410,
        border: "1px solid black", // Add this line for the border
      }}
    />
  );
}

export default NetworkVisualization;
