# Obsidian Clipper Bookmarklet

A bookmarklet that saves the current page's URL and/or highlighted text to Obsidian.md.

## "Installation"

1. Copy the contents of `obsidian-cliplet.js`
2. Make a new bookmark in your browser
3. In the URL field, type "javascript:" and then paste the contents you just copied

## Usage

There are several options that you can configure in `obsidian-cliplet.js` to make a more "custom" version.  By default, all clippings are _appended_ to a file called `web_clipping`.  For the range of options available, check out `obsidian-cliplets.js` and the [Obsidian URI API](https://help.obsidian.md/Advanced+topics/Using+obsidian+URI).

## TODO

- Make more configurable
- Automate the "build" process of `README.md` to generate a link for installation (i.e. so that users can just use "add bookmark" from that link)
- ...