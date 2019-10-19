# project2
MLB WAR Analysis and Visualization

## Overview
The goal of our project was create a web dashboard that displays career stats for the top 50 WAR leaders in the MLB over the past 5 years. 

The inspiration for this project came from [FiveThirtyEight's NBA Player Projections](https://projects.fivethirtyeight.com/2020-nba-player-projections/) dashboard. 

![fivethirtyeight](/images/538.png)


## What is WAR?
The main stat that we were interested in and are displaying is WAR (Wins Above Replacement). The WAR stat has become increasingly popular and attempts to summarize a player's overall contribution to their team. The calculations that go into the final number are complex but a detailed explaination can be found on the [FanGraphs](https://library.fangraphs.com/misc/war/) website. 

In it's simplest form the WAR number represents how many wins or losses a player will contribute to a team if they were to replace a player with league average stats. So, for example, if a player has a WAR of 4, it can be said that they have helped their team win an additional 4 games than the team would have won if they had replaced that player with an average player.

## Data Sources
We ended up needing to use multiple sources for our data. 
  * **Selecting Players:**
    To get the list of players that we would be using we used [ESPN's Annual WAR Leaders](http://www.espn.com/mlb/war/leaders) 
  * **Getting PLayer ID's:** 
    This ended up being one of the bigger challenges we faced. Each organization has their own ID's for players, which weren't neccesarily easy to come by. We were able to find a csv from CrunchTimeBasebll which had player ID's from MLB, ESPN, Fangraphs, Yahoo and BaseballReference.
   * **Stats:** For the majority of our statistics we were able to use the ESPN player ID's to build query urls and pull individual player stats off of each player's ESPN profile page. (Example of [Alex Bregman's page](http://www.espn.com/mlb/player/stats/_/id/34886/alex-bregman))
 
 
## Cleaning Data

## Database Connection

## Website 

## Conclusions

## Challenges
