import '../src';

const el = document.createElement('DIV');
el.style.position = 'absolute';
el.style.left = 0;
el.style.top = 0;
el.style.right = 0;
el.style.bottom = 0;
el.style.display = 'flex';
el.style.flexFlow = 'row nowrap';
el.style.alignItems = 'center';
el.style.justifyContent = 'center';
el.style.padding = '20px';
el.style.color = '#717171';

document.body.appendChild(el);

el.innerHTML = `
<x-saw-tag-field />
`;
