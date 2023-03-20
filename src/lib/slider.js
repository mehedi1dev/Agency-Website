/**
 * @param {object} _cardsSlider parent div that contains child (cards) div.
 * @param {object} _cardSlider child (cards) div.
 * @param {Number} _intervalTime Interval time between sliding.
 * @param {Number} _gap gap between card in pixel, Do not need add gap in CSS.
 * @param {Number} _leastCard number of card remaining at the end.
 * @param {object} _nextButton next button if any.
 * @param {object} _prevButton previous button if any.
 */

export const sliderFunction = (
  _cardsSlider,
  _cardSlider,
  _intervalTime = 1,
  _gap = 16,
  _nextButton = null,
  _prevButton = null
) => {
  const cards_Slider = _cardsSlider;
  const card_Slider = _cardSlider;
  const interval_Time = _intervalTime;
  let translateXByPixel = 0;
  const gap = _gap;
  let stepCount = 0;

  console.log(cards_Slider.children.length);
  console.log(stepCount);
  cards_Slider.style.gap = `${gap}px`;
  const translateIncreaseByFunction = () => {
    if (stepCount + 2 >= cards_Slider.children.length) {
      translateXByPixel = 0;
      stepCount = 0;
    } else {
      stepCount++;
      translateXByPixel += card_Slider.offsetWidth + gap;
    }
    return translateXByPixel;
  };
  const translateDecreaseByFunction = () => {
    if (stepCount + 2 >= cards_Slider.children.length) {
      translateXByPixel -= card_Slider.offsetWidth + gap;
      stepCount--;
    } else {
      stepCount = 0;
      translateXByPixel = 0;
    }
    return translateXByPixel;
  };

  const slideNext = () => {
    cards_Slider.style.transform = `translateX(${-translateIncreaseByFunction()}px)`;
  };
  const slidePrev = () => {
    cards_Slider.style.transform = `translateX(${-translateDecreaseByFunction()}px)`;
  };

  _nextButton &&
    _nextButton.addEventListener("click", () => {
      clearInterval(interval);
      slideNext();
      interval = setInterval(slideFunction, interval_Time * 1000);
    });

  _prevButton &&
    _prevButton.addEventListener("click", () => {
      clearInterval(interval);
      slidePrev();
      interval = setInterval(slideFunction, interval_Time * 1000);
    });

  const slideFunction = () => {
    slideNext();
    return () => clearInterval(interval);
  };

  let interval = setInterval(slideFunction, interval_Time * 1000);
};
