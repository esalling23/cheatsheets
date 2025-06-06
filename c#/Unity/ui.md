# UI

## Layout

### How to size child to fill parent

- Parent needs a "Horizontal layout group" 
  - enable both width and height in Child Control Size
  - enable only height in Child Force Expand
- Add LayoutElement to the child element and set Flexible Width to 1

### Responsive layout

- set parent to a given size
- set child(ren) object(s) to have a stretch sizing
- set their min/max x & y values to whatever size you want. 

Example: for 2 50% child objects with the first on the left
- set first child to min x 0 & max x 0.5
- set 2nd child to min x .5 & max x 1

[ | ]

Example: for 2 objects with the first on the left being 20% of the width and the 2nd on the right using the rest of the space
- set first child to min x 0 & max x 0.2
- set 2nd child to min x .2 & max x 1

[ |        ]

## Fonts

### Importing

[Community Answer](https://discussions.unity.com/t/importing-custom-fonts-into-unity/19437/6)

1. Put the fonts you want to use into the asset folder (or a fonts folder in your asset folder).
2. Now in the Unity project explorer, right click the font.
3. Click Create > TextMeshPro > Font Asset.
4. Use the new Font Asset on your Text objects.


