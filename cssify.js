function js2css(s) { 
  return s.replace(/([A-Z])/g, function(match, p1) {
    return '-'+p1.toLowerCase()
  });
}

function cssify(CSS) {
  var output = '';
  Object.keys(CSS).forEach(function(klass) { 
    output += '.' + klass + ' {\n' 
    Object.keys(CSS[klass]).forEach(function(cssProp) { 
     output += '    ' + js2css(cssProp) + ': ' + CSS[klass][cssProp].replace(/'/g, '') + ';\n';
    });
    output += '}\n\n';
  });
  return output;
}
