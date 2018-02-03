function populateGrid() {
    for(i = 0; i < 625; i++) {
        var newGridSquare = document.createElement('div');
        newGridSquare.className = 'grid-square';
        newGridSquare.setAttribute('id', 'square-' + (i + 1));
        document.getElementById('grid-container').appendChild(newGridSquare);
    }
}

function activateDrawMode() {
    var gridSquares = document.getElementsByClassName('grid-square');

    for(i = 0; i < gridSquares.length; i++) {
    	gridSquares[i].style.backgroundColor = '#CCCCCC';
    	addDrawModeListener(gridSquares[i]);
    }
}

function addDrawModeListener(gridSquare) {
    gridSquare.addEventListener('click', function() {
        gridSquare.style.backgroundColor = '#000000';
    });
}

function init() {
	populateGrid();
	drawMegamanFrameOne();
}

window.onload = init();

function drawMegamanFrameOne() {
	var megamanBlack = [38, 39, 40, 61, 62, 63, 66, 85, 89, 
                       92, 109, 115, 116, 117, 118, 134, 140, 144, 158, 166, 
                       167, 169, 183, 194, 208, 214, 215, 217, 219, 234, 239, 
                       240, 242, 244, 258, 259, 269, 281, 282, 285, 288, 289, 
                       290, 291, 293, 294, 295, 305, 311, 317, 321, 330, 337,
                       338, 339, 340, 341, 346, 354, 359, 367, 372, 379, 382, 
                       383, 392, 393, 394, 397, 404, 408, 409, 417, 418, 422,
                       384, 433, 434, 442, 443, 447, 455, 456, 457, 459, 467, 
                       429, 470, 471, 483, 493, 507, 513, 519, 531, 532, 537, 
                       469, 544, 545, 554, 555, 561, 565, 571, 572, 578, 586, 
                       539, 598, 603, 604, 605, 606, 607, 608, 609, 610, 611, 
                       590, 615, 616, 617, 618, 619, 620, 621, 622, 623]; 
                       
    var megamanLight = [64, 65, 90, 91, 141, 142, 159, 184, 209, 283, 284, 307, 
                       308, 309, 310, 318, 319, 333, 334, 335, 336, 342, 343,
                       358, 360, 361, 362, 363, 364, 365, 366, 368, 385, 386,
                       387, 388, 389, 390, 391, 392, 410, 411, 412, 413, 414, 
                       415, 416, 484, 485, 490, 491, 492, 510, 511, 512, 514,
                       515, 516, 517, 536, 540];

    var megamanDark = [86, 87, 88, 110, 111, 112, 113, 114, 135, 136, 137, 138,
                      139, 143, 160, 161, 162, 163, 164, 165, 168, 185, 186, 191,
                      192, 210, 235, 260, 286, 306, 320, 331, 332, 344, 345, 355, 
                      356, 357, 369, 370, 371, 380, 381, 395, 396, 405, 406, 407,
                      419, 420, 421, 430, 431, 432, 435, 436, 437, 438, 439, 440, 
                      441, 444, 445, 446, 460, 461, 462, 463, 464, 465, 466, 486, 
                      487, 488, 489, 508, 509, 518, 533, 534, 535, 541, 542, 543, 
                      556, 557, 558, 559, 560, 566, 567, 568, 569, 570, 579, 580, 
                      581, 582, 583, 584, 585, 591, 592, 593, 594, 595, 596, 597];
                      
    var megamanSkin = [187, 211, 216, 236, 241, 261, 262, 266, 287, 292, 312,
                      313, 314, 315, 316];
    
    for (i = 0; i < megamanBlack.length; i++) {
    	var targetSquare = megamanBlack[i];
    	document.getElementById('square-' + [targetSquare]).style.backgroundColor = '#000000';
    } 

    for (i = 0; i < megamanLight.length; i++) {
    	var targetSquare = megamanLight[i];
    	document.getElementById('square-' + [targetSquare]).style.backgroundColor = '#00B7F0';
    }

    for (i = 0; i < megamanDark.length; i++) {
    	var targetSquare = megamanDark[i];
    	document.getElementById('square-' + [targetSquare]).style.backgroundColor = '#0080FF';
    } 

    for (i = 0; i < megamanSkin.length; i++) {
    	var targetSquare = megamanSkin[i];
    	document.getElementById('square-' + [targetSquare]).style.backgroundColor = '#FFD5A6';
    } 
}

