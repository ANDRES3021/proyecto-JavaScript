var whatDoYouDo = function(job, name) {
    switch (job) {
      case 'developer':
        return name + ' develops cool apps.';
      case 'designer':
        return name + ' designs awesome websites.';
      default:
        return name + ' does something else.'
    }
  }
  
  console.log(whatDoYouDo('developer', 'John Doe'));
  console.log(whatDoYouDo('designer', 'Jane Doe'));
  console.log(whatDoYouDo('retired', 'Mark Doe'));