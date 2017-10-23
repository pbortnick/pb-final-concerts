# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


concerts  = Concert.create( [
  {
    artist: "Bruce Springsteen",
    genre: "Rock",
    date: Date.new(2017, 12, 30),
    venue_id: 1
  },
  {
    artist: "Lady Gaga",
    genre: "Pop",
    date: Date.new(2018, 11, 10),
    venue_id: 2
  }
])

venues = Venue.create( [
  {
    name: "Madison Square Garden",
    city: "New York",
    state: "NY",
    description: "Home of the New York Knicks",
    image: "https://cbsnewyork.files.wordpress.com/2010/10/garden_outside.jpg?w=420"
  },
  {
    name: "Citi Field",
    city: "Queens",
    state: "NY",
    description: "Home of the New York Mets",
    image: "https://traveldigg.com/wp-content/uploads/2016/09/Citi-Field-Outside-Photo-At-Night-720x404.jpg"
  }
])
