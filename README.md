# MMM-KVV
<B>Station monitor</B> for the <B>Karlsruhe local transport (KVV)</B> bus, tram and train system.<P>

This module is an extension of the amazing [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror) project by [MichMich](https://github.com/MichMich/) which has inspired me to share my coding skills with others as well. Check it out, you know you want to :). <P>

It's always nice to see mirrors using my work, so feel free to send me some screenshots of your implementations.<P>

Lastly, why not join in on our discussions at the official [MagicMirror<sup>2</sup> Forum](http://forum.magicmirror.builders/)?

## Screenshots

![German version](screenshots/screenshot_de.png)
![English version](screenshots/screenshot_en.png)

## Current version

v1.0.3

## Languages
As of version 1.0.0, MMM-KVV features language support for `German (de)` and `English (en)` mirrors.

## Prerequisite
A working installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
 
## Dependencies
  * npm
  * [request](https://www.npmjs.com/package/request)

## Installation
1. Navigate into your MagicMirror's `modules` folder.
2. Execute `git clone https://github.com/yo-less/MMM-KVV.git`.
3. Execute `cd MMM-KVV`.
3. Execute `npm install`.

## Module behavior
Please note that this module auto-creates a module header which displays the name of the chosen Karlsruhe local transport stop. It is therefore recommended not to add a 'header' entry to your config.js for this module.<P>
This module automatically disappears from your mirror as soon as a station has stopped offering connections at night. It reappears as soon as your chosen station is scheduled to be served again.<P>
This module has been programmed to allow for multiple instances. Simply add more MMM-KVV config entries to your config.js file to display multiple stations and configure them according to your needs.

## Configuration
Sample minimum configuration entry for your `~/MagicMirror/config/config.js`:

    ...
    
    {
        module: 'MMM-KVV',
        position: 'top_left',
        config: {
			stopID: '',		// Which stop would you like to have displayed?			
        }
    } 						// If this isn't your last module, add a comma after the bracket
    
    ...

Sample configuration entry for your `~/MagicMirror/config/config.js` with optional parameters:

    ...
    
    {
        module: 'MMM-KVV',
        position: 'top_left',
        config: {
			stopID: '',		// Which stop would you like to have displayed?
			maxConn: 6,		// How many connections would you like to see? (Maximum: 10)
			lines: '',		// What lines are you interested in?
			direction: '',	// If you want to, you can limit the information to one of two directions
			labelRow: true, // Show or hide column headers
		    reload: 60000 	// How often should the information be updated? (In milliseconds)
        }
    } 						// If this isn't your last module, add a comma after the bracket
    
    ...

## Figuring out the correct stopID
1. Open your web browser and navigate to the [KVV Live Web Page](http://live.kvv.de).
2. Use the search field to find the stop you are interested in.
3. Once you can see the list of connections for your stop in your browser, note the information after "stopId=",<BR> this is the `StopID` you are looking for.

## Config Options
| **Option** | **Default** | **Description** |
| :---: | :---: | --- |
| stopID | de:8212:89 | <BR>Which stop would you like to have displayed? <BR><EM> Default: Karlsruhe central station (tram stop)</EM><P> |
| maxConn<BR>`optional` | 8 | <BR> How many connections would you like to see? <BR><EM><B>Note</B>: The KVV API limits the maximum number of connections to 10.</EM><P> |
| lines<BR>`optional` |  | <BR> Only show connections for specific lines - use commas to choose multiple lines.<BR><EM> Example values: '3, S1'<BR><B>Note</B>: You <B>can</B> use spaces when setting this parameter in order to enhance legibility.</EM><P> |
| direction<BR>`optional` |  | <BR> There are really "two" stops to every stop, depending on what side of the street you're standing on. You can limit the presented information to one of those "two" stops.<BR> <EM>Possible values: 1, 2</EM><P> |
| labelRow<BR>`optional` | true | <BR> Show or hide column headers<BR> <EM>Possible values: true, false</EM><P> |
| reload<BR>`optional`  | 60000 | <BR> How often should the information be updated? (In milliseconds) <BR><EM> Default: Every minute </EM><P> |

## Licence
MIT License

Copyright (c) 2016 yo-less (https://github.com/yo-less/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
