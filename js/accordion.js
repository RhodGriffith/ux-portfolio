(function () {
  if (!window.neptune) { window.neptune = {}; }
  var self = neptune.Accordion = {};

  self.init = function () { }

  self.constructor = function (elem) {
    this.sections = [];
    for (i = 0; i < elem.children.length; i++) {
      var section = {};
      // Save the section element
      section.elem = elem.children[i];

      // Make the first element in the section the 'handle'
      section.handle = section.elem.firstElementChild;
      section.handle.classList.add('neptune-accordion__handle');

      if (section.handle.nodeName === 'BUTTON') {
        console.error('The first child of each accordion element must not be a <button>');
        return;
      }

      // Create the handle's button
      var button = document.createElement('button');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('type', 'button');
      button.innerHTML = '<span>' + section.handle.innerHTML + '</span>';
      button.innerHTML += '<svg width="16px" height="16px" viewBox="0 0 322 208"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="angle-down" fill="#EE020A" fill-rule="nonzero"><g id="angle-right" transform="translate(161.000000, 104.000000) rotate(90.000000) translate(-161.000000, -104.000000) translate(57.000000, -57.000000)"><path d="M200.3,178 L64.3,314 C54.9,323.4 39.7,323.4 30.4,314 L7.8,291.4 C-1.6,282 -1.6,266.8 7.8,257.5 L104.2,161.1 L7.8,64.7 C-1.6,55.3 -1.6,40.1 7.8,30.8 L30.3,8 C39.7,-1.4 54.9,-1.4 64.2,8 L200.2,144 C209.7,153.4 209.7,168.6 200.3,178 L200.3,178 Z" id="Path"></path></g></g></g></svg>';
      

      section.handle.innerHTML = '';
      section.handle.appendChild(button);
      section.button = button;

      // Make the contents everything in the section
      // except the handle
      var contents = Array.prototype.slice.call(section.elem.children, 1);
      // Create the drawer into which to place the contents
      section.drawer = document.createElement('div');
      section.drawer.classList.add('neptune-accordion__drawer');
      section.drawer.hidden = true;
      // Place the contents in the draw
      contents.forEach(function (node) {
        section.drawer.appendChild(node);
      });
      section.elem.appendChild(section.drawer);

      // Save a reference to the section
      this.sections.push(section);
    }

    // If the URL contains a hash corresponding to a section
    // or child of a section, open the section
    // and focus the fragment
    this.hashHandle = function () {
      var id = window.location.hash.substring(1);
      var target = document.getElementById(id);
      this.sections.forEach(function (section) {
        if (section.elem.contains(target)) {
          this.open(section);
          target.tabIndex = -1;
          target.focus();
        }
      }.bind(this));
    }

    // Handle the hash behaviour
    document.addEventListener('DOMContentLoaded', this.hashHandle());
    window.addEventListener('hashchange', function () {
      this.hashHandle();
    }.bind(this));

    // Listen to clicks on the handle buttons to 
    // toggle the section state between collapsed and expanded
    this.sections.forEach(function (section) {
      section.button.addEventListener('click', function () {
        var expanded = !section.drawer.hidden;
        if (expanded) {
          this.close(section);
        } else {
          this.open(section);
        }
      }.bind(this));
    }.bind(this));
  }

  // The open method
  self.constructor.prototype.open = function (section) {
    section.button.setAttribute('aria-expanded', 'true');
    section.drawer.hidden = false;
  }

  // The close method
  self.constructor.prototype.close = function (section) {
    section.button.setAttribute('aria-expanded', 'false');
    section.drawer.hidden = true;
  }

  // The openAll method
  self.constructor.prototype.openAll = function () {
    this.sections.forEach(function (section) {
      this.open(section);
    }.bind(this));
  }

  // The closeAll method
  self.constructor.prototype.closeAll = function () {
    this.sections.forEach(function (section) {
      this.close(section);
    }.bind(this));
  }
})();
 

