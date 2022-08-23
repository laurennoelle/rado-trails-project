# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "🌱 Seeding trails..."


t1 = Trail.create(name:"Horsetooth Trail", img_url:"https://images.unsplash.com/photo-1658419655425-d359ac8a0bf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", city:"Fort Collins", length: 4, est_time: 2)
t2 = Trail.create(name:"Hewlett Gultch", img_url:"https://images.unsplash.com/photo-1590013335840-83bbe7031d4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1941&q=80", city:"Fort Collins", length: 8, est_time: 3)
t3 = Trail.create(name:"Grey Rock", img_url:"https://images.unsplash.com/photo-1619994948937-ef1e758d46ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80", city:"Fort Collins", length: 9, est_time: 5)
t4 = Trail.create(name:"Bear Peak", img_url:"https://images.unsplash.com/photo-1528226922624-a3d2fe277cf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", city:"Boulder", length: 3, est_time: 3)
t5 = Trail.create(name:"Mesa Trail", img_url:"https://images.unsplash.com/photo-1644983038252-a80b1536bdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", city:"Boulder", length: 2, est_time: 3)
t6 = Trail.create(name:"Resevoir Ridge", img_url:"https://images.unsplash.com/photo-1653250947541-756cf6d786f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", city:"Fort Collins", length: 4, est_time: 2)





puts "✅ Done seeding!"