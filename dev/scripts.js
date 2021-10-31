import lottie from 'lottie-web';
import {
  defineLordIconElement,
  BasicTrigger,
  LordIconElement
} from 'lord-icon-element';

const CLICK_EVENTS = ['mousedown', 'touchstart'];

class ClickMeTwiceTrigger extends BasicTrigger {
  constructor(element, target, lottie) {
    super(element, target, lottie);

    this.direction = this.reverse ? -1 : 1;
    this.setDirection(this.direction);
  }

  connectedCallback() {
    super.connectedCallback();

    for (const event of CLICK_EVENTS) {
      const options = event === 'touchstart' ? { passive: true } : undefined;
      this.target.addEventListener(event, this.enterBound, options);
    }
  }

  disconnectedCallback() {
    for (const event of CLICK_EVENTS) {
      this.target.removeEventListener(event, this.enterBound);
    }

    this.setDirection(1);

    super.disconnectedCallback();
  }

  enter() {
    if (!this.inAnimation) {
      this.play();
    }
  }

  ready() {
    if (this.reverse) {
      this.goToLastFrame();
    }
  }

  complete() {
    this.direction = -this.direction;
    this.setDirection(this.direction);
  }

  get reverse() {
    return this.element.hasAttribute('reverse');
  }
}

LordIconElement.registerTrigger('click-me-twice', ClickMeTwiceTrigger);

defineLordIconElement(lottie.loadAnimation);