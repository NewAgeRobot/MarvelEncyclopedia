# My Awesome Project
The objective is to be able to look up characters, get a summary of them, and find comics that they appear in. With all these movies how can you resist reading the comics to see what happens?

**Link to project:** https://marvelencyclopedia.netlify.app/

![alt tag](https://user-images.githubusercontent.com/1900240/168642035-b1b7a33f-a257-432d-9a91-d05a7f79c722.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Marvel API

I made this using the Marvel API, and javascript mostly. I built a simple responsive table that could house the listings that were returned from the API, dynamically iterating through the returned search results and adding them.

## Optimizations

A limitation of the Marvel API is that there is a lot of missing content, even for major characters like Doctor Strange. I would like to improve it to either use the, potentially outdated, superhero API if and when it doesn't find descriptions. 
Another improvement I implemented was that the API allows for searching by name, but very clunkily handles incorrect spelling and characters that share titles (like multiple Captain Marvels) so I used the nameStartsWith parameter which does expand the returned values but ultimately provides a better experience due to how the API returns values.
I plan to update this to filter out characters returned that don't have a link to comics, which would remove instances like the lego versions.

## Lessons Learned:

It was really interesting to work with the API, for such a major property the data is incredibly thin and really badly organised. There's no information to return the order in which the comics were published so I will have to concoct a way to show a "first appearance" value by combining potentially other calls or using another API. It was great to get the table expanding with results though and it's very fun to read about all the new heroes from movies.