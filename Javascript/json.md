## Json

- https://stackoverflow.com/questions/35940857/javascript-strange-behavior-in-json-object-manipulation?rq=1


```js
const newJson = JSON.parse(JSON.stringify(someJson));
// Pretend its json
const payoffItems = [{ layers: '', nm: 1}, { layers: '', nm: 2 }]
let itemsReplaced = 0;

newJson.layers = newJson.layers.map((layer) => {

  const newLayer = JSON.parse(JSON.stringify(layer));
  const items = JSON.parse(JSON.stringify(payoffItems));

  if (layer.nm === ITEM_LAYER_NAME && itemsReplaced < payoffItems.length - 1) {
    // const itemReplacement = JSON.parse(JSON.stringify(items[itemsReplaced].layers));
    itemsReplaced++;
    newLayer.layers = JSON.parse(JSON.stringify(items[itemsReplaced - 1].layers[0]));
    // return {
    //   ...newLayer,
    //   layers: JSON.parse(JSON.stringify(payoffItems[itemsReplaced - 1].layers[0])),
    // };
  }
  return newLayer;
});
// ^ Does not work??
// Tried multiple ways
// final JSON this version has only the last item

let itemsReplaced = 0;
newJson.layers = newJson.layers.map((orig) => {
  const newLayer = JSON.parse(JSON.stringify(orig));
  const items = JSON.parse(JSON.stringify(payoffItems));

  if (newLayer.nm === ITEM_LAYER_NAME && itemsReplaced < items.length - 1) {
    const itemReplacement = JSON.parse(JSON.stringify(items[itemsReplaced]));
    const itemLayers = JSON.parse(JSON.stringify(itemReplacement.layers));
    itemsReplaced++;
    newLayer.layers = JSON.parse(JSON.stringify(itemLayers))[0];
  }
  return newLayer;
});
// ^ also does not work
```