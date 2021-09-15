1.	How long did you spend on the coding assignment? 
Answer: 1.5 days altogether

a.	What would you add to your solution if you had more time?
Answer: I would enhance the look and feel of the solution.

b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
Answer: I would use animation libraries to make the page attractive.

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Answer: JSX is one of the best features of Reactjs. It makes the syntax almost identical to the HTML. This makes writing the building blocks of Reactjs effortless and simple. 

Code Snippet: 

    return (
        <>
            <div>
                Search for Books <input onChange={e => setSearchKey(e.target.value)} /> <button onClick={onSearch} > Search </button>
            </div>
        </>
    )

3.	How would you track down a performance issue in production? Have you ever had to do this?
Answer: For a slow website, troubleshooting tip is to optimize all images. This is a simple, yet highly effective way of improving speed for SEO. Image format can also affect site speed and hence you can also use JPEGs instead of more bandwidth options like PNGs and GIFs.


4.	How would you improve the API that you just used?
Answer: I used the Fetch API. I will improve it in such a way that I don't need to call response.json() every time I make a http request. Most of the time we need the data directly or an error that can be handled with a catch block.

5.	Please describe yourself using correctly formatted JSON.
Answer:
{
  "name": "Komali",
  "lastname": "Borampet",
  "age": 24,
  "nationality": "Indian",
  "livesin": "Canada",
  "passions": [
    "Programming",
    "Learning something new",
    "Doing great creative work"
  ],
  "interests": [
    "Music",
    "Watching movies"
  ],
  "dreams": [
    "To make this world a better place!"
  ],
  "believes": [
    "That we should all have a chance in life, we should not be judged because of our color, ethnicity and educational background!"
  ]
}