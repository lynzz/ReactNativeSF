const BLANK_WIDTH = 10

module.exports = {
  '<h1>': {
    fontSize: 36,
    paddingBottom: BLANK_WIDTH,
  },
  '<h2>': {
    fontSize: 30,
    paddingBottom: BLANK_WIDTH,
  },
  '<h3>': {
    fontSize: 24,
    paddingBottom: BLANK_WIDTH,
  },
  '<h4>': {
    fontSize: 18,
    paddingBottom: BLANK_WIDTH,
  },
  '<h5>': {
    fontSize: 14,
    paddingBottom: BLANK_WIDTH,
  },
  '<h6>': {
    fontSize: 12,
    paddingBottom: BLANK_WIDTH,
  },
  '<blockquote>': {
    borderLeftWidth: 5,
    borderColor: '#ccc',
    paddingLeft: BLANK_WIDTH
  },
  '<ol>': {
    marginLeft: BLANK_WIDTH
  },
  '<ul>': {
    marginLeft: BLANK_WIDTH
  },
  '<li>': {
    paddingBottom: BLANK_WIDTH,
  },
  '<strong>': {
    fontWeight: 'bold'
  },
  '<p>': {
    fontSize: 12,
    color: '#333',
    padding: 0,
    marginTop: BLANK_WIDTH,
    marginBottom: BLANK_WIDTH,
    flex: 1
  },
  '<pre>': {
    marginTop: BLANK_WIDTH,
    marginBottom: BLANK_WIDTH,
    backgroundColor: '#333',
    fontWeight: 'bold',
    color: '#2a2',
    flex: 1
  },
  '<code>': {
    backgroundColor: '#f6f6f6',
    color: '#c7254e',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: BLANK_WIDTH,
    marginBottom: BLANK_WIDTH,
    borderRadius: 3
  },
  '<div>': {
    color: '#333',
    fontSize: 12,
    flex: 1,
    flexDirection: 'column'
  }
};
