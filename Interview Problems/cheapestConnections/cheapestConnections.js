// INCOMPLETE

// Will likely need a recursive approach to find all the possible
// itineraries & their costs

// Flight data
const flights = [
  ('JFK', 'ATL', 150),
  ('ATL', 'SFO', 400),
  ('ORD', 'LAX', 200),
  ('LAX', 'DFW', 80),
  ('JFK', 'HKG', 800),
  ('ATL', 'ORD', 90),
  ('JFK', 'LAX', 500),
]

// Returns flight options based on source (starting flight)
// Gotta be a way to memo this too?
const findFlightOptions = function (start) {
  return flights.filter(flight => flight[0] === start)
}

const cheapestConnections = function (allowedConnections, source, destination) {
  const itineraries = []
  // memo to keep track of flight options (flights from a certain location)
  const departureOptions = {}

  if (!departureOptions[source]) {
    departureOptions[source] = findFlightOptions(source)
  }

  const findItinerary = function (itinerary, departureFlight) {
    if (departureFlight[1] === destination) {
      // We reached our destination
      itinerary.flights.push(destination)
      itinerary.price += departureFlight[2]
      return itinerary
    }

    return findItinerary()
  }

  const findCheapest = function () {
    return itineraries.reduce((a, c) => {
      if (a.price > c.price) {
        a = c
      }
      return a
    }, itineraries[0])
  }

  for (const flight of flightOptions[source]) {
    itineraries.push(findItinerary({ flights: [], price: 0 }, flight))
  }
}

// Should print:
// { flights: ["JFK", "ATL", "ORD", "LAX"], price: 440 }
console.log(cheapestConnections(3, 'JFK', 'LAX'))
