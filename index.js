const logDriverNames = function(array)
{
  array.forEach(function(item)
  {
    console.log(item.name);
  });
}

const logDriversByHometown = function (array, location) {
  array.forEach(function (item) {
    if (item.hometown === location) {
      console.log(item.name);
    }
  });
};

const driversByRevenue = function (array) {
  return array.slice().sort(function (first, second) {
    return fisrt.revenue - second.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};