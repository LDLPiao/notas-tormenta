---
regiao: tapista
tags:
  - cidade
---
%% Begin Waypoint %%
- **Locais**
	- [[Portão sudeste de Malpetrim]]
- **NPCs**
	- [[Rufus]]

%% End Waypoint %%
[Mapa Interativo](https://watabou.github.io/city-generator?size=59&seed=1056528787&name=Malpetrim&citadel=1&urban_castle=1&plaza=1&temple=1&walls=1&shantytown=1&coast=1&river=1&greens=0&hub=1&sea=1.2)

![[malpetrim.png|700]]

==a: Circo Thiannate; b: Mercado; c: Portão norte; d: [[Portão sudeste de Malpetrim]]; e: Portão principal; f: Arena dos Heróis; g: Porto de Malpetrim; h: Taverna do macaco empalhado; i: Estalagem da Águia Dourada==


```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: Malpetrim-map
### Lock pins so they can't be moved
lock: true
### If true, view of map will recenter as you zoom out. 
recenter: true
### If true, disables mouse scroll for zomming in and out of a map. Button controls still work. 
noScrollZoom: true
image: [[malpetrim.png]]
### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)
### Map Pixel Width x 1 / (Pixels between Bar Scale / 100) 
### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit. 
bounds: [[0,0], [4491, 3735]]
height: 500px
width: 85%
### This sets where the map starts by default. Set it to the middle (half) of your bounds. 
lat: 2245.5  
long: 1867.5
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
minZoom: -3.5
### Max zoom is 18. 
maxZoom: -1.5
### Hover mouse over the Reset Zoom icon to see your current zoom level. 
defaultZoom: -3
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: meters  
scale: 0.8547
darkMode: false
```


![[Pasted image 20241105192106.png]]