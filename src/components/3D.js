import ForceGraph3D from "react-force-graph-3d";
import SpriteText from "three-spritetext";
import { useState } from "react";

const CircleSprites = () =>{
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
  const [displayHeight, setDisplayHeight] = useState(window.innerHeight);
  window.addEventListener('resize', () => {
    setDisplayWidth(window.innerWidth);
    setDisplayHeight(window.innerHeight);
  });
  console.log(displayWidth);
  const genRandomTree = (N , data) => {
    let nodes = data.map((node, itr) => (
    node
    ) )
    console.log(nodes)
    return {
      nodes: data.map((node, itr) => ({
        id: node[1],
        canvas: drawCircle(node[0], node[4])
      }) ),
      links: data
        .filter(id => id)
        .map((node, itr) => ({
          source: node[2],
          target: node[3]
        }))
    };

    //draw a circle to a canvas and return
    function drawCircle(name, color) {
      let canvas = document.createElement("canvas");
      canvas.id = name;
      canvas.color = color
      canvas.width = 50;
      canvas.height = 50;
      let ctx = canvas.getContext("2d");
      let PI2 = Math.PI * 2;
      ctx.arc(8, 8, 8, 0, PI2, true);
      ctx.fillStyle = "rgb(210,180,0)";
      ctx.fillRect(2,2,2,3)

      return canvas;
    }
  };

    const data = genRandomTree(7, [['<< Group B >>', 0, 0, 0, '#a318de'], 
    ['< Front End >', 1, 0, 1, 'white'], 
    ['< API Gateway >', 2, 0, 2, 'white'], 
    ['< Microservice 1 >', 3, 0, 3, 'white'], 
    ['< Microservice 2 >', 4, 0, 4, 'white'], 
    ['< Microservice 3 >', 5, 0, 5, 'white'],  
    ['Achuth Rajula', 7, 1, 7, '#15e6ca'], 
    ['Varshik Sonti', 8, 7, 8, '#15e6ca'], 
    ['Laxman Rao', 9, 7, 9, '#15e6ca'], 
    ['Kousthubha', 10, 7, 10, '#15e6ca'], 
    ['Sarfaraz', 11, 5, 11, '#e82758'], 
    ['Shyam Yannamadi', 12,11, 12, '#e82758'], 
    ['Hameeda', 13,11, 13, '#e82758'],
    ['Divya', 14, 11, 14, '#e82758'],
    ['Aditya Desai', 15, 2, 15, 'orange'],
    ['Lor Worwag', 16, 2, 16, 'orange'],
    ['Srikar', 17, 4, 17, '#95e615'],
    ['Chandana', 18, 17, 18, '#95e615'],
    ['Venkata Surya', 19, 17, 19, '#95e615'],
    ['Vashishth', 20, 17, 20, '#95e615'],
    ['Gautham', 21, 3, 21, 'yellow'],
    ['Shivani', 22, 21, 22, 'yellow'],
    ['Itiparna', 23, 21, 23, 'yellow'], 
    ['Shantanu', 24, 21, 24, 'yellow'],
    ['', 25, 1, 2, 'red'],
    ['', 26, 2, 3, 'red'],
    ['', 27, 3, 4, 'red'],
    ['', 28, 4, 5, 'red'],
    ['', 29, 5, 1, 'red']]);
    console.log(data);
    return (
      <>
       <ForceGraph3D
       forceEngine="d3"
       d3Force = "50"
        graphData={data}
        width={displayWidth*.94}
        height={displayHeight}
        nodeLabel="id"
        nodeVisibility={true}
        
        cameraPosition={[0, 10000, 0]}
        nodeThreeObject={({ canvas }) => {
          console.log(canvas.color)
          const sprite = new SpriteText(canvas.id);
          sprite.color = canvas.color;
          sprite.padding = (8,8,20);
          sprite.scale.set(40, 20, 200);
          return sprite;
        }}
      />
      </>
    );
}

export default CircleSprites;