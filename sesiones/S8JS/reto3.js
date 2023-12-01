function createTabs(node) {
    var tabs = Array.from(node.children).map(function(node) {
      var button = document.createElement("button");
      button.textContent = node.getAttribute("data-tabname");
  
      var tab = {
        node: node,
        button: button
      };
  
      button.addEventListener("click", function() {
        return selectTab(tab)
      });
  
      return tab;
    });
  
    var tabList = document.createElement("div");
  
    for (var i = 0; i < tabs.length; i++) {
      tabList.appendChild(tabs[i].button);
    }
  
    node.insertBefore(tabList, node.firstChild);
  
    function selectTab(selectedTab) {
      for (var i = 0; i < tabs.length; i++) {
        var selected = tabs[i] == selectedTab;
        tabs[i].node.style.display = selected ? "" : "none";
        tabs[i].button.style.color = selected ? "red" : "";
      }
    }
  
    selectTab(tabs[0]);
  }
  
  createTabs(document.querySelector("#tab-panel"));