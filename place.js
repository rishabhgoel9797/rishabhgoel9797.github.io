let imageSlider=document.querySelectorAll('.slide');
	arrowLeft=document.querySelector('#arrow-left');
	arrowRight=document.querySelector('#arrow-right');
	current=0; /*current is used to show the current slide we are on*/

	

	//clear all images everytime you click on the arrow
	function reset()
	{
		for(let i=0;i<imageSlider.length;i++)
		{
			imageSlider[i].style.display='none';
		}
	}
	//Init Slider
	function startSlide()
	{
		reset();
		imageSlider[0].style.display='block';
	}

	//Show Previou Slide
	function slideLeft()
	{
		reset();
		imageSlider[current-1].style.display='block';
		current--;
	}

	//show next slide
	function slideRight()
	{
		reset()
		imageSlider[current+1].style.display='block';
		current++;
	}

	//on clicking left arrow
	arrowLeft.addEventListener('click',function()
	{
		if(current===0)
		{
			current=imageSlider.length;
		}
		slideLeft();
	});

	//on clicking right arrow
	arrowRight.addEventListener('click',function()
	{
		if(current===imageSlider.length-1)
		{
			current=-1;
		}
		slideRight();
	});
 

    function automatic()
    {
    	
    	for(let i=0;i<imageSlider.length;i++)
    	{
    		imageSlider[i].style.display='none';
    	}
    	current++;
    	if(current>imageSlider.length)
    	{
    		current=1;
    	}
    	imageSlider[current-1].style.display='block';
    	setTimeout(automatic,2000);
    }

	startSlide();
	automatic();

/*I am facing a problem as automatic timer and click are not working simulataneously as value of current is changing everytime you click or every 5 seconds according to the timer set by setTimeout(automatic,5000) function*/
