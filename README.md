MEMER
=====

I built this on a lark one weekend's afternoon while pointedly avoiding my responsibilites as an adult.  The purpose was to be able to take an image, overlay text using the IMPACT font on it, and be able to save that image somewhere on my harddrive.  This makes it extremely easy for me to abuse slack's ability to take images, as i tend to use memes as communication methods frequently.

It works, but here are a few things I'd prefer to change about it

 + remove imagemagick as a dependency (maybe use the canvas instead??)
 + add a font-size specifier (currently it's locked at 72pt)
 + improve a few user interface items, such as what to click to save the image, as well as how to change the image once it's been loaded.
 + currently, a temporary image is stored in your system's assigned tmp directory.  would prefer to be a bit more creative with resource management.  possibly able to eliminate this by using the canvas??

as i note - imagemagick is currently a dependency for image processing purposes.
