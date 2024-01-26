# horizon-task
# graph visualization of networks
# List of libraries suitable for graph visualization.
**------------------------------------------------------------------------------------**
1) D3.Js
   PROS :
    a) Complete control over every aspect of your visualization , you can format and style data for better interaction. We can create any kind of visualization from simple bar charts to complex network graphs and animated maps.
    b) D3.js is an open-source library, meaning it is free to use and modify. There is a large and active community of developers who contribute to its documentation, tutorials, examples, plugins, and extensions. This makes it easy to find help and resources when you need them.
    c) D3.js can handle large datasets with ease , provides a powerful set of functions and methods that give you complete control over the DOM (Document Object Model) of your visualization.
   CONS :
   a) Steep learning curve , time-consuming and creating complex visualizations with D3.js can be time-consuming.
   b)  Need to write a lot of code to achieve the desired results can be particularly challenging if you not familiar with the library.
   c) Because of its low-level nature, D3.js can be error-prone.Not beginner-friendly: D3.js is not recommended for beginners , does not provide any ready-made charts or components. You need to build everything from scratch or use third-party libraries.

2) Sigma.Js
   PROS :
      a) Performance: Sigma.js utilizes WebGL by default, offering smooth and performant visuals even for large datasets.Sigma.js allows extensive customization, offering control over node and edge styling, layouts, animations, and interactions.
      b) Open-source and free: Sigma.js is free to use and modify and active community supporting its development and offering resources like examples and plugins.
      c) Sigma.js supports both GEXF and JSON formats, simplifying integration with existing data sources.
      CONS :
      a) Learning curve and not demanding as compare to other libraries.
      b) Mainly focuses on core graph functionality , you need to implement more complex interactions or visual elements yourself.
      c) Debugging complex visualizations in Sigma.js can be challenging, especially for beginners.
      d) Multiple edges between nodes representing distinct points in time, might require workarounds or special implementations due to current limitations.
 
3) React-graph vis
   PROS :
      a) Ease of use: Compared to raw Vis.js, React-graph-vis offers a much more developer-friendly experience. Its React integration allows for declarative configuration and component-based development, making it easier to build and maintain complex graph visualizations.
      b) React-graph-vis inherits the extensive functionalities of Vis.js, including various node and edge styles, layout algorithms, animations, and interactions. You can create dynamic and informative graphs for diverse use cases.
      c)Beyond the built-in features, React-graph-vis allows for further customization through props and events. You can tailor the behavior and appearance of your graph to perfectly match your needs.
   CONS:
     a) Not as optimized as pure WebGL libraries.
     b) Last maintained 3 years ago , several unfixed issues and not famous as compare to other libraries.
     c) Any updates or issues with Vis.js could potentially impact React-graph-vis, requiring developers to stay informed about changes and potential incompatibilities.
     d)  For truly massive datasets or highly interactive visualizations, pure WebGL libraries like Cytoscape.js might offer better performance than React-graph-vis.

4) Cytoscope.Js
   PROS :
    a) Cytoscape.js supports a wide range of graph types and layouts, allowing you to create clear and informative visualizations of even the most complex networks.
    b) Can easily customize the appearance of your graphs through CSS styling and the library's extensive API.
    c) Cytoscape.js allows you to add interactivity to your graphs, such as node and edge selection, panning, zooming, and tooltips.Cytoscape.js integrates with various other libraries and frameworks, making it easy to incorporate it into your existing workflows.
   CONS :
    a) Cytoscape.js doesn't have built-in support for representing geographical data.
    b) No built-in data analysis: While it facilitates visual analysis, Cytoscape.js itself doesn't offer in-depth data analysis tools.
    c) Cytoscape.js has a steeper learning curve.
##----------------------------------------------------------------------------------------------------------------------------------------------------##

Reason for choosing Cytoscope .
a) Plenty of resources available 
b) Documentation with lots of demo examples for better understanding.
c) Meets the requirements need and easy to implement.
d) Weekly Downloads are 507,402 and regular maintenance.



    

