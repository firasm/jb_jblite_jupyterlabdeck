# Demo of a JupyterLab Deck presentation

## First attempt: "Native"

Here's what it looks like with just the `jupyterlite` directive:

```{jupyterlite} notebook.ipynb
```

## Second attempt: "Using iFrame"

Here's what it looks like if I steal the `iframe` code from the [jupyterlab-deck](https://jupyterlab-deck.readthedocs.io/en/stable/) docs.
Slightly hacky, but this allows me to have better control over the dimensions of the Slide Deck.

<iframe
src="./_static/lab/index.html?path=demo.ipynb"
style="width: 99%; border: solid 1px #999; height: 500px"
></iframe>

## Third attempt: 