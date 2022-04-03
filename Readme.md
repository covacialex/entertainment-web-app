## Entertainment web app

#### frontendmentor.io challenge.

My attempt at the challenge using the Model-View-Controller.

[Live website.](https://covacialex.github.io/entertainment-web-app/index.html)

#### Things I've learned.

On \_generateMarkupPreview() from **Views**, I had to find a way to render icon SVGs based on movie category. The problem was that the information I got from **data.json** was a plain string **TV Series**, while the svg file was named **category-series.svg**. So it resulted in **category-movie.svg**, which worked, and **category-tv-series.svg** which didn't work. After reading the documentation on the **split()** method, turns out there is a second parameter called **limit**, which only splits until a given index. In this case, it was the first empty space, so I used **.split(" ", 1)** to get **Series** and transformed it to lower case.
