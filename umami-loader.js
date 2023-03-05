const scriptName = document.currentScript.getAttribute('data-script-name');

fetch('config/config-umami.json')
  .then(response => response.json())
  .then(config => {
    if (scriptName && config.websiteId) {
      const umamiScript = document.createElement('script');
      umamiScript.async = true;
      umamiScript.defer = true;
      umamiScript.dataset.websiteId = config.websiteId;
      umamiScript.dataset.scriptName = scriptName;
      umamiScript.dataset.umamiUrl = config.umamiUrl;
      umamiScript.dataset.umamiPort = config.umamiPort;
      umamiScript.src = `https://${config.umamiUrl}:${config.umamiPort}/umami.js`;
      document.head.appendChild(umamiScript);
    }
  });
