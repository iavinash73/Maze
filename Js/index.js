let l1 = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
let l2 = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
let l3 = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
let l4 = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
let sun = 0;
let g_time = 0;
let s_x = 0;
let s_y = 1;
let e_x = 13;
let e_y = 23;
let starting = [],
  ending = [];
let level = 0;
let map_n = document.querySelector(".map_name h1").innerHTML;
let l5 = document.getElementById("1000").innerHTML;
console.log(typeof l1);
switch (map_n[4]) {
  case "A":
    l = l1;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 40;
    level = 1;
    break;
  case "B":
    l = l2;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 30;
    level = 2;
    break;
  case "C":
    l = l3;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 30;
    level = 3;
    break;
  case "D":
    l = l4;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 40;
    level = 4;
    break;
  case "o":

    console.log(l5);
    l5 = JSON.parse(l5);
    console.log(typeof l5);
    l = l5;
    starting = find_start();
    ending = find_end();
    s_x = starting[0];
    s_y = starting[1];
    e_x = ending[0];
    e_y = ending[1];
    g_time = 60;
    level = 0;
    break;
}
function find_start() {
  for (i = 0; i < l.length; i++) {
    for (j = 0; j < l[i].length; j++) {
      if (l[i][j] == 0) {
        starting = [i, j];
        return starting;
      }
    }
  }
}
function find_end() {
  for (i = l.length - 1; i >= 0; i--) {
    for (j = l[i].length - 1; j >= 0; j--) {
      if (l[i][j] == 0) {
        return [i, j];
      }
    }
  }
}
let order = new Array([0, 0]);
order.pop(0);
let end = [e_x, e_y];
let flag = 0;
let rpos = s_x;
let cpos = s_y;
let visit = [[rpos, cpos]];
let mv = 0;
let btn = document.querySelector(".btn");
btn.addEventListener("click", gamepage);
function gamepage() {
  $.post("/usedpages", { lvl: level });
  document.querySelector(".tohide").classList.add("hide");
  document.querySelector(".tounhide").classList.remove("tounhide");
  $(".hide_nav").addClass("maze_nav");
  $(".hidden_in_nav").removeClass("hidden_in_nav");
  progress(g_time, g_time, $("#progressBar"));
  walling();
  po();
}
let timeused = 0;
function progress(timeleft, timetotal, $element) {
  let progressBarWidth = ($element.width() * timeleft) / timetotal;
  timeused = timetotal - timeleft;
  if (timeleft <= g_time / 10 && timeleft >= 0) {
    $element
      .find("div")
      .animate({ width: progressBarWidth }, 500)
      .html(timeleft);
    setTimeout(function () {
      progress(timeleft - 1, timetotal, $element);
    }, 1000);
  } else if (timeleft > 0) {
    $element
      .find("div")
      .animate({ width: progressBarWidth }, 500)
      .html(timeleft + " seconds to go");
    setTimeout(function () {
      progress(timeleft - 1, timetotal, $element);
    }, 1000);
  }
  if (timeleft === 0) {
    document.querySelector("#progressBar").classList.add("hide");
    document.querySelector(".sol_h1").classList.remove("hidden_h1");
    rpos = s_x;
    cpos = s_y;
    l[rpos][cpos] = 0;
    l[end[0]][end[1]] = 0;
    while (visit.length > 0) { visit.pop(); }

    walling();

    document
      .getElementById(e_x + "-" + e_y)
      .setAttribute("class", "ghost_coloured_end");
    document
      .getElementById(s_x + "-" + s_y)
      .setAttribute("class", "ghost_coloured_start");
    pathfind(rpos, cpos, "down");
    let d = 1;
    setInterval(function () {
      if (d != order.length - 1) {
        let x = Number(order[d][0]),
          y = Number(order[d][1]);
        d++;
        const content = document.getElementById(x + "-" + y);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-fade fa-lg"></i>';
        content.setAttribute("class", "visited");
      }
    }, 250);


  }
}
function walling() {
  for (i = 0; i < l.length; i++) {
    for (j = 0; j < l[i].length; j++) {
      if (l[i][j] == 0) {
        const content = document.getElementById(i + "-" + j);
        let attr = content.getAttributeNode("class");
        if (attr == null) {
          continue;
        }
        content.innerHTML = " ";
        content.removeAttributeNode(attr);
        content.setAttribute("class", "ghost");
      }
      if (l[i][j] == 1) {
        const content = document.getElementById(i + "-" + j);
        content.innerHTML = '<img src="../static/fire_gif_black.gif"></img>';
        content.setAttribute("class", "wall");
      }
      if (i == e_x && j == e_y) {
        const content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-house fa-lg"></i>';
        content.setAttribute("class", "house");
      }
      if (i == s_x && j == s_y) {
        const content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-beat fa-xl"></i>';
        content.setAttribute("class", "ghost");
      }
    }
  }
}
function po() {
  window.onkeyup = function (e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      mv = move(e.keyCode);
      // no=0, yes=1, del=2
      if (mv === 1 && sun == 0) {
        i = rpos;
        j = cpos;
        let content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-beat fa-xl"></i>';
        content.setAttribute("class", "ghost");

        let k = visit[visit.length - 2];
        i = k[0];
        j = k[1];
        content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-fade fa-lg"></i>';
        content.setAttribute("class", "visited");
      }
      if (mv === 2 && sun == 0) {
        i = rpos;
        j = cpos;
        content = document.getElementById(i + "-" + j);
        content.innerHTML = '<i class="fa-solid fa-ghost fa-beat fa-xl"></i>';
        content.setAttribute("class", "ghost");

        let k = visit.pop();
        i = k[0];
        j = k[1];
        content = document.getElementById(i + "-" + j);
        content.innerHTML = " ";
        content.setAttribute("class", "unvisited");
      }
      if (mv === 0 && sun == 0) {
        var kick = new Audio("../static/kick-bass.mp3");
        kick.play();
      }
      if (JSON.stringify([e_x, e_y]) === JSON.stringify([rpos, cpos])) {

        console.log(timeused);
        $.post("/data", { javascript_data: timeused, lvl: level });
        content = document.getElementById('progressBar').setAttribute("class", "invisible");
        content = document.getElementById('ending').setAttribute("class", "sol_h1");
        if (sun == 0) {
          content = document.getElementById('ending').innerHTML = "<h1>You have finished the game in " + timeused + " seconds</h1>";
          sun = 1;
        }
        content = document.getElementById('mygod').setAttribute("class", "hidden_h1");
      }
    }
  };
}

// no=0, yes=1, del=2
function move(dir) {
  //left
  if (dir == 37) {
    if (l[rpos][cpos - 1] == 1) {
      return 0;
    } else {
      cpos -= 1;
      return check(rpos, cpos);
    }
  }
  //up
  else if (dir == 38) {
    if (l[rpos - 1][cpos] == 1) {
      return 0;
    } else {
      rpos -= 1;
      return check(rpos, cpos);
    }
  }
  //right
  else if (dir == 39) {
    if (l[rpos][cpos + 1] == 1) {
      return 0;
    } else {
      cpos += 1;
      return check(rpos, cpos);
    }
  }
  //down
  else if (dir == 40) {
    if (l[rpos + 1][cpos] == 1) {
      return 0;
    } else {
      rpos += 1;
      return check(rpos, cpos);
    }
  }
}

function check(rpos, cpos) {
  if (visit.length >= 2) {
    let g = visit[visit.length - 2];
    if (g[0] == rpos && g[1] == cpos) {
      return 2;
    } else {
      visit.push([rpos, cpos]);
      return 1;
    }
  } else {
    visit.push([rpos, cpos]);
    return 1;
  }
}

function pathfind(r, c, dir) {
  order.push([r, c]);
  if (end[0] == r && end[1] == c) {
    flag = 1;
  } else {
    if (dir != "up" && l[r + 1][c] == 0 && flag != 1) {
      pathfind(r + 1, c, "down");
    }
    if (dir != "right" && l[r][c - 1] == 0 && flag != 1) {
      pathfind(r, c - 1, "left");
    }
    if (dir != "down" && l[r - 1][c] == 0 && flag != 1) {
      pathfind(r - 1, c, "up");
    }
    if (dir != "left" && l[r][c + 1] == 0 && flag != 1) {
      pathfind(r, c + 1, "right");
    }
    if (flag != 1) {
      order.pop();
      return;
    }
  }
  return;
}
//prim
#include <stdio.h>
#include <stdlib.h>
struct node 
{
    int val;
    int wei;
    struct node *next;
}*newN,*temp,*N,*Min,*t1,*t2,*t3=0,*m1,*m2;
int l=0,min;
struct node* newnode() 
{
    newN=malloc(sizeof(struct node));
    return newN;
};
void addEdge(struct node*arr[],int n1,int n2,int w)
{
    N=newnode();
    if(arr[n1]==0)
    {
        arr[n1]=N;
        arr[n1]->val=n2;
        arr[n1]->wei=w;
    }
    else
    {
        temp=arr[n1];
        while(temp->next!=NULL)
        {
            temp=temp->next;
        }
        temp->next=N;
        temp->next->val=n2;
        temp->next->wei=w;
    }
    if(l==0)
    {
        l=w;
        Min=N;
    }
    else if(l>w)
    {
        l=w;
        Min=N;
    }
}
void addEdges(struct node*arr[],int n1,int n2,int w)
{
    addEdge(arr,n1,n2,w);
    addEdge(arr,n2,n1,w);
}
struct node * findNode(struct node*arr[],int n,int w)
{
    temp=arr[n];
    while(temp!=NULL)
    {
        if(temp->wei==w)
        {
            break;
        }
        temp=temp->next;
    }
    return temp;
}
struct node* findNext(struct node* arr[],int n,int check[])
{
    temp=arr[n];
    t3=0;
    min=0;
    while(temp!=NULL)
    {
        if(min==0&&check[temp->val]!=1)
        {
            min=temp->wei;
            t3=temp;
        }
        else if(min>temp->wei&&check[temp->val]!=1)
        {
            min=temp->wei;
            t3=temp;
        }
        temp=temp->next;
    }
    return t3;
}
int main()
{
    int n;
    printf("enter no of vertices: ");
    scanf("%d",&n);
    struct node*arr[n];
    int res[n*2],check[n],ind=0,e=0;
    for(int i=0;i<n;i++)
    {
        arr[i]=0;
        check[i]=0;
    } 
    int edges,n1,n2,w,cost=0;
    printf("enter no of edges: ");
    scanf("%d",&edges);
    while(edges--)
    {
        printf("enter two nodes to establish edge: ");
        scanf("%d %d",&n1,&n2);
        printf("enter weight: ");
        scanf("%d",&w);
        n1--;
        n2--;
        addEdges(arr,n1,n2,w); 
    }
    t1=Min;
    t2=findNode(arr,Min->val,l);
    res[ind++]=t1->val+1;
    res[ind++]=t2->val+1;
    check[t1->val]=1;
    check[t2->val]=1;
    cost+=t1->wei;
    while(ind!=n)
    {
        m1=findNext(arr,t1->val,check);
        m2=findNext(arr,t2->val,check);
        if(m2==0 ||m1->wei<m2->wei)
        {
            res[ind++]=m1->val+1;
            check[m1->val]=1;
            cost+=m1->wei;
            t1=m1;
        }
        else if(m1==0 ||m1->wei>m2->wei)
        {
            res[ind++]=m2->val+1;
            check[m2->val]=1;
            cost+=m2->wei;
            t2=m2;
        }
    } 
    printf(" cost is:%d\n",cost);
    for(int i=0;i<ind;i++)
    {
        printf(" %d",res[i]);
    }
}//htdjy
#include<stdio.h>
#include<stdlib.h>
struct node
{
    int n1;
    int n2;
    int wei;
}*N;
int findNext(struct node*arr[],int n)
{
    int min=0,minInd=0;
    for(int i=1;i<n+1;i++)
    {
        if(arr[i]!=NULL)
        {
            if(min==0)
            {
                min=arr[i]->wei;
                minInd=i;
            }
            else if(min>arr[i]->wei)
            {
                min=arr[i]->wei;
                minInd=i;
            }
        }
    } 
    return minInd;
}
int main()
{
    int n,min=0,minInd;
    printf("enter no of vertices: ");
    scanf("%d",&n);
    int check[n+1],res[n+1];
    for(int i=0;i<n+1;i++)
    {
        check[i]=0;
    }
    int edges,cost=0,n1,n2,w,ind=0;
    printf("enter no of edges: ");
    scanf("%d",&edges);
    struct node*arr[edges+1];
    arr[0]=0;
    for(int i=1;i<edges+1;i++)
    {
        printf("enter two nodes to establish edge and enter weight : ");
        scanf("%d %d %d",&n1,&n2,&w);
        N=malloc(sizeof(struct node));
        N->n1=n1;
        N->n2=n2;
        N->wei=w;
        arr[i]=N;
        if(min==0)
        {
            min=w;
            minInd=i;
        }
        else if(min>w)
        {
            min=w;
            minInd=i;
        }
    }
    res[ind++]=arr[minInd]->n1;
    res[ind++]=arr[minInd]->n2;
    check[arr[minInd]->n1]=1;
    check[arr[minInd]->n2]=1;
    cost+=arr[minInd]->wei;
    arr[minInd]=NULL;
    while(ind!=n)
    {
        minInd=findNext(arr,edges);
        if(check[arr[minInd]->n1]!=1||check[arr[minInd]->n2]!=1)
        {
            if(check[arr[minInd]->n1]!=1)res[ind++]=arr[minInd]->n1;
            if(check[arr[minInd]->n2]!=1)res[ind++]=arr[minInd]->n2;
            check[arr[minInd]->n1]=1;
            check[arr[minInd]->n2]=1;
            cost+=arr[minInd]->wei;
        }
        arr[minInd]=NULL;
    }
    printf(" cost is:%d\n",cost);
    for(int i=0;i<ind;i++)
    {
        printf(" %d",res[i]);
    }
}
