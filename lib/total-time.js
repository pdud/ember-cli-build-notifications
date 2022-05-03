'use strict';

const graph = require('heimdalljs-graph');

// https://github.com/ember-cli/ember-cli/blob/v3.2.0-beta.1/lib/models/instrumentation.js#L262,L292
const totalTimeFromTree = function (tree) {
  let totalTime = 0;
  let nodeItr;
  let node;
  let statName;
  let statValue;
  let statsItr;
  let nextNode;
  let nextStat;

  for (nodeItr = tree.dfsIterator(); ; ) {
    nextNode = nodeItr.next();
    if (nextNode.done) {
      break;
    }

    node = nextNode.value;

    for (statsItr = node.statsIterator(); ; ) {
      nextStat = statsItr.next();
      if (nextStat.done) {
        break;
      }

      statName = nextStat.value[0];
      statValue = nextStat.value[1];

      if (statName === 'time.self') {
        totalTime += statValue;
      }
    }
  }

  return totalTime;
};

module.exports = function totalTime(results) {
  let buildTime = results.totalTime;

  if (!results.totalTime && results.graph && results.graph.__heimdall__) {
    let buildTree = graph.loadFromNode(results.graph.__heimdall__);
    buildTime = totalTimeFromTree(buildTree);
  }

  if (buildTime) {
    return Math.round(buildTime / 1e6) + 'ms';
  } else {
    return 'unavailable';
  }
};
