import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: #101032;
  width: 100vw;
  padding-top: 30px;
  padding-bottom: 50px;

  h1 {
    padding-left: 30px;
    padding-bottom: 5px;
    color: white
  }
`

const ShowYear = styled.div`
  background-color: white;
  width: 80vw;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
  font-size: 20px;

  a {
	text-decoration: none;
	color: #888;
	padding-left: 12px;
  }

  ul {
	list-style-type: circle;
  }
`

const Exhibitions = () => {
  return(
    <Div id='exhibitions'>
    <h1>Exhibitions</h1>
      <ShowYear>
        <h3>2016</h3>
        <ul>
          <li>Victor Ya&#241;ez-Lazcano - <em>de</em></li>
          <li>Barbara Diener - <em>Phantom Power</em></li>
          <li>Adam Holtzman - <em>Mirror Darkly</em></li>
          <li>David Gremp - <em>Downstate: Photographs of Southern Illinois circa 1975</em></li>
        </ul>
      </ShowYear>
      <ShowYear>
        <h3>2015</h3>
        <ul>
          <li>Rachel Jump - <em>Origins</em></li>
          <li>Allison Barnes, Rachel Hulin, & Asia Kepka - <em>Iterations</em>  <a href="http://art.newcity.com/2015/09/24/review-iterationsalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Dan Farnum - <em>Young Blood</em>  <a href="http://art.newcity.com/2015/06/27/review-dan-farnumalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>David Akiba - <em>Remembering Harry Callahan</em> <a href="http://art.newcity.com/2015/04/15/review-david-akibaalibi-fine-art-2/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Crusade for Art Collective - <em>All that is Solid</em></li>
        </ul>
      </ShowYear>
      <ShowYear>
        <h3>2014</h3>
        <ul>
          <li>Joe Johnson - <em>Other Pictures</em></li>
          <li>S. Gayle Stevens - <em>Disappearance</em></li>
          <li>Gallery Artists - <em>Reflective</em></li>
          <li>Adam Holtzman - <em>Bodly, We Go Blindly</em>  <a href="http://art.newcity.com/2014/04/29/review-adam-holtzmanalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Allison Barnes - <em>Neither For Me Honey Nor the Honey Bee</em></li>
        </ul>
      </ShowYear>
      <ShowYear>
        <h3>2013</h3>
        <ul>
          <li>Ron Cowie - <em>Perimeter of Babylon</em>  <a href="http://art.newcity.com/2013/11/19/review-ron-cowiealibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Asia Kepka - <em>Bridget & I</em></li>
          <li>David Gremp - <em>Chicago 78/79</em>  <a href="http://art.newcity.com/2013/06/18/review-david-grempalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a><a href="https://www.chicagoreader.com/chicago/david-gremp-1978-photography-at-alibi/Content?oid=9925651" target="_blank" rel="noopener noreferrer"> (article)</a></li>
          <li>Dan Farnum - <em>Growing Up</em></li>
          <li>Fred Burkhart - <em>Burkhart's Underground</em> <a href="http://art.newcity.com/2013/02/07/fred-burkhart-renaissance-man-of-the-underground/" target="_blank" rel="noopener noreferrer">(article)</a> <a href="https://hyperallergic.com/65335/derelicts-drunks-hippies-and-queers-fred-burkharts-life-in-photographs/" target="_blank" rel="noopener noreferrer">(review)</a></li>
        </ul>
      </ShowYear>
      <ShowYear>
        <h3>2012</h3>
        <ul>
          <li>David Akiba - <em>The Entwining Landscape</em></li>
          <li>Joseph Sterling - <em>Taste of Chicago</em>  <a href="http://art.newcity.com/2012/09/11/review-joseph-sterlingalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Charles H. Traub - <em>Beach Photographs</em>  <a href="http://art.newcity.com/2012/08/01/review-charles-h-traubalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a>  <a href="http://myemail.constantcontact.com/Two-Reviews-for-Charles-H--Traub--Beach-Photographs--at-Alibi-Fine-Art.html?soid=1103640740656&aid=2rx6UBr1S20" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Charles Swedlund - <em>The Whole Show</em></li>
          <li>Justin Thomas Leonard - <em>New Work</em>  <a href="http://art.newcity.com/2012/04/17/review-justin-thomas-leonardalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
        </ul>
      </ShowYear>
      <ShowYear>
        <h3>2011</h3>
        <ul>
          <li>Mark Steinmetz - <em>The Ancient Tigers of my Neighborhood</em>  <a href="http://art.newcity.com/2011/10/25/review-mark-steinmetzalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Joel Wellington Fisher - <em>Washington to Washington</em>  <a href="http://art.newcity.com/2011/09/13/review-joel-w-fisheralibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Sebrina Fassbender,
          Jacqueline Langelier, Jessie Seib & Sigri Strand - <em>Group Show</em>  <a href="http://art.newcity.com/2011/07/11/review-2011-summer-group-exhibitionalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Joe Johnson - <em>Local Weather</em>  <a href="http://art.newcity.com/2011/05/09/review-joe-johnsonalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Rosemary Warner - <em>Additions and Subtractions: The Altered Image</em>  <a href="http://art.newcity.com/2011/03/21/review-rosemary-warneralibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>David Gremp - <em>Family Run</em></li>
        </ul>
      </ShowYear>
      <ShowYear>
        <h3>2010</h3>
        <ul>
          <li>Olivia Wyatt - <em>Staring into the Sun</em></li>
          <li>David Akiba - <em>Knot This Broken Thread</em>  <a href="http://art.newcity.com/2010/09/27/review-david-akibaalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
          <li>Joe Johnson, Justin Thomas Leonard & Joel Wellington Fisher - <em>Inaugural Exhibition</em>  <a href="http://art.newcity.com/2010/07/19/review-inaugural-exhibitionalibi-fine-art/" target="_blank" rel="noopener noreferrer">(review)</a></li>
        </ul>
      </ShowYear>
    </Div>
  );
}

export default Exhibitions
