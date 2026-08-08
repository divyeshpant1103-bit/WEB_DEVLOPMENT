/* Shared markup helpers for the pages in this repo, written as custom elements
   so they work by simply opening the HTML files in a browser (no build step).

   Include with: <script src="assets/js/components.js" defer></script>

   Elements:
     <site-nav logo="Divyesh" links="HOME=#, About=#about">
     <site-footer heading="Contact Links">
     <back-to-top href="#top" text="back to top">
     <form-field label="Name:" type="text" name="name" placeholder="..." required inline>
     <form-field label="Occupation" type="select" name="ocp" options="student=Student, other=Other">
     <choice-group legend="Skills" type="checkbox" name="skills" options="html=HTML, css=CSS">

   The elements render into the light DOM, so page CSS applies normally and the
   inputs take part in native form submission.
*/

const CONTACT_LINKS = [
  ['LinkedIn', 'https://www.linkedin.com/in/divyesh-pant-69911a325/'],
  ['GitHub', 'https://github.com/divyeshpant1103-bit'],
  ['Instagram', 'https://www.instagram.com/divyesh_pant/'],
];

const DEFAULT_NAV_LINKS = [
  ['HOME', '#'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

/* Parses `"HOME=#, About=#about"` into `[["HOME", "#"], ["About", "#about"]]`. */
function parsePairs(value) {
  if (!value) return [];
  return value
    .split(',')
    .map((pair) => pair.trim())
    .filter(Boolean)
    .map((pair) => {
      const separator = pair.indexOf('=');
      if (separator === -1) return [pair, pair];
      return [pair.slice(separator + 1).trim(), pair.slice(0, separator).trim()];
    });
}

function anchor(text, href) {
  const link = document.createElement('a');
  link.textContent = text;
  link.href = href;
  return link;
}

function linkList(className, links) {
  const list = document.createElement('ul');
  list.className = className;
  for (const [text, href] of links) {
    const item = document.createElement('li');
    item.appendChild(anchor(text, href));
    list.appendChild(item);
  }
  return list;
}

/* Copies presentational/validation attributes straight through to the control. */
function applyPassThroughAttributes(host, control) {
  const passThrough = [
    'placeholder', 'value', 'min', 'max', 'step', 'rows', 'cols',
    'accept', 'multiple', 'pattern', 'required', 'readonly', 'disabled',
  ];
  for (const attribute of passThrough) {
    if (host.hasAttribute(attribute)) {
      control.setAttribute(attribute, host.getAttribute(attribute));
    }
  }
}

class SiteNav extends HTMLElement {
  connectedCallback() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const logo = this.getAttribute('logo');
    if (logo) {
      const brand = document.createElement('span');
      brand.className = 'logo';
      brand.textContent = logo;
      nav.appendChild(brand);
    }

    const links = this.hasAttribute('links')
      ? parsePairs(this.getAttribute('links'))
      : DEFAULT_NAV_LINKS;
    nav.appendChild(linkList('nav-links', links));

    this.appendChild(nav);
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';

    const heading = document.createElement('h2');
    heading.textContent = this.getAttribute('heading') || 'Contact Links';
    footer.appendChild(heading);
    footer.appendChild(linkList('contact-links', CONTACT_LINKS));

    this.appendChild(footer);
  }
}

class BackToTop extends HTMLElement {
  connectedCallback() {
    const link = anchor(
      this.getAttribute('text') || 'back to top',
      this.getAttribute('href') || '#top',
    );
    link.className = 'back-to-top';
    this.appendChild(link);
  }
}

/* A label plus its control, with `for`/`id` always kept in sync. */
class FormField extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type') || 'text';
    const name = this.getAttribute('name') || '';
    const id = this.getAttribute('field-id') || name || `field-${FormField.counter++}`;

    const row = document.createElement('div');
    row.className = this.hasAttribute('inline') ? 'form-row inline' : 'form-row';

    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = this.getAttribute('label') || '';
    row.appendChild(label);

    let control;
    if (type === 'select') {
      control = document.createElement('select');
      const prompt = this.getAttribute('prompt');
      if (prompt) {
        const option = document.createElement('option');
        option.value = '';
        option.disabled = true;
        option.selected = true;
        option.textContent = prompt;
        control.appendChild(option);
      }
      for (const [text, value] of parsePairs(this.getAttribute('options'))) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        control.appendChild(option);
      }
    } else if (type === 'textarea') {
      control = document.createElement('textarea');
    } else {
      control = document.createElement('input');
      control.type = type;
    }

    control.id = id;
    if (name) control.name = name;
    applyPassThroughAttributes(this, control);
    row.appendChild(control);

    this.appendChild(row);
  }
}
FormField.counter = 0;

/* A fieldset of radios or checkboxes sharing one `name`, each with a unique id. */
class ChoiceGroup extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type') || 'checkbox';
    const name = this.getAttribute('name') || '';

    const fieldset = document.createElement('fieldset');
    fieldset.className = 'choice-group';

    const legendText = this.getAttribute('legend');
    if (legendText) {
      const legend = document.createElement('legend');
      legend.textContent = legendText;
      fieldset.appendChild(legend);
    }

    for (const [text, value] of parsePairs(this.getAttribute('options'))) {
      const id = `${name || 'choice'}-${value}`;

      const wrapper = document.createElement('span');
      wrapper.className = 'choice-option';

      const input = document.createElement('input');
      input.type = type;
      input.id = id;
      input.value = value;
      if (name) input.name = name;
      if (this.getAttribute('checked') === value) input.checked = true;

      const label = document.createElement('label');
      label.htmlFor = id;
      label.textContent = text;

      wrapper.appendChild(input);
      wrapper.appendChild(label);
      fieldset.appendChild(wrapper);
    }

    this.appendChild(fieldset);
  }
}

customElements.define('site-nav', SiteNav);
customElements.define('site-footer', SiteFooter);
customElements.define('back-to-top', BackToTop);
customElements.define('form-field', FormField);
customElements.define('choice-group', ChoiceGroup);
