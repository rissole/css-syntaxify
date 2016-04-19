function js2css(s) { 
  return s.replace(/([A-Z])/g, function(match, p1) {
    return '-'+p1.toLowerCase()
  });
}

function cssify(CSS) {
  var jsv2cssv = function(v) {
    return Number.isInteger(v) && v != 0 ? v + 'px' : v;
  }
  var output = '';
  Object.keys(CSS).forEach(function(klass) { 
    output += '.' + klass + ' {\n' 
    Object.keys(CSS[klass]).forEach(function(cssProp) { 
     output += '    ' + js2css(cssProp) + ': ' + jsv2cssv(CSS[klass][cssProp]) + ';\n';
    });
    output += '}\n\n';
  });
  return output;
}
