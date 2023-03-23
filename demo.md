# Demo of a JupyterLab Deck presentation

Things mostly work!
But There are still things that do not work!

```{important}
- [ ] The new `jupyterlab_myst` feature to have a clickable checklist doesn't seem to work in a markdown file (but it probably works in a JupyterLab notebook) 
- [ ] Find a way to set `[overrides.json](https://jupyterlab.readthedocs.io/en/stable/user/directories.html#overrides-json)` so the [jupyterlab-deck starts in slide mode](https://jupyterlab-deck.readthedocs.io/en/stable/#enabling-deck-mode-at-startup).
- [ ] Fix the annoying "JupyterLab Code Formatter" error! (need to disable the extension on JupyterLite)
- [ ] Find a way to configure the environment so I can tell it what python packages to start with
- [ ] Add some styling elements to the `jupyterlite` directive so the width and the height can be controlled.
- [ ] Export the `jupyterlab-deck` to a PDF or to HTML.
```

## First attempt: "Native"

Here's what it looks like with just the `jupyterlite` directive.

The code is:

````
```{jupyterlite} notebook.ipynb
```
````

and the result is:

```{jupyterlite} notebook.ipynb
```

## Second attempt: "Using iFrame"

Here's what it looks like if I steal the `iframe` code from the [jupyterlab-deck](https://jupyterlab-deck.readthedocs.io/en/stable/) docs.
Slightly hacky, but this allows me to have better control over the dimensions of the Slide Deck.

The code is:
```
<iframe
src="./lite/lab/index.html?path=notebook.ipynb"
style="width: 99%; border: solid 1px #999; height: 500px">
</iframe>
```

And the result is:

<iframe
src="./lite/lab/index.html?path=notebook.ipynb"
style="width: 99%; border: solid 1px #999; height: 500px">
</iframe>

## Third attempt: 

Coming soon.... will try it when things get set up with JupyterLite.