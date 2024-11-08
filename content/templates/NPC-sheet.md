```statblock
## Modelo de ficha usado
layout: Tormenta
## Infos básicas do personagem
name: <% tp.file.title %>
level: <% tp.frontmatter.level %>
tendencia: Caótico e neutro
tamanho: Médio
deslocamento: 9m
## Stats do personagem
habilidades: [10,10,10,10,10,10]
hp: <% tp.frontmatter.hp %>
pm: <% tp.frontmatter.pm %>
ac: <% tp.frontmatter.ac %>
## Bonus de resistencia
resistencias: 
 - fort: 0
 - ref: 0
 - von: 0
## Perícias
perícias:
  - __Iniciativa__: <% tp.frontmatter.modifier %> (1d20+<% tp.frontmatter.modifier %>)
  - __Percepção__: 0
## Ataques disponíveis
attacks:
  - name: 
    desc: 

## Magias conhecidas
spellcasting:
  - Truques podem ser usados à vontade, demais magias gastam PM igual ao seu nível de magia
  - Spell: 
## Habilidades e talentos
habilidades:
  - name: 
    desc: 
  - name: 
    desc: 
   
talentos:
  - name: 
    desc: 
  - name:
    desc:

## Define se a ficha deve ser guardada no bestiário
bestiary: false
```
