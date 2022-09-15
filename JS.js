document.addEventListener("keydown", direction);

function direction(event) {
    if(event.keyCode == 37) {
        a = "Left";
    } else if(event.keyCode == 38 ) {
        a = "Up";
    } else if(event.keyCode == 39) {
        a = "Right";
    } else if(event.keyCode == 40) {
        a = "Down";
    }
}

    function rendering() {
      ctx.fillStyle = "#444";
      ctx.fillRect(0, 0, 608, 608);
      ctx.fillStyle = "#f22";
      ctx.fillRect(f.x, f.y, box, box);
      for (var i = 0; i < snake.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
      }

      ctx.fillStyle = "white";
      ctx.font = "40px Arial";
      ctx.fillText(score, box*2.5, box*1.5);

      let qx = snake[0].x;
      let qy = snake[0].y;

      if(qx == f.x && qy == f.y) {
        score++;
        f = {
          x: Math.floor(Math.random() * 17 + 1) * box,
          y: Math.floor(Math.random() * 15 + 3) * box
        };
      } else {
        snake.pop();
      }

      if(qx < box || qx > box*17 || qy < box || qy > box*17) {
        clearInterval(w);
      }

      if(a == "Left") qx -= box;
      if(a == "Right") qx += box;
      if(a == "Up") qy -= box;
      if(a == "Down") qy += box;

      let nh = {
        x: qx,
        y: qy
      };

      snake.unshift(nh);