u1 = User.create!(username: "alex", first_name: "Alex", last_name:"Chin")
u2 = User.create!(username: "rane", first_name: "Rane", last_name:"Gowan")
u3 = User.create!(username: "ed", first_name: "Ed", last_name:"Compton")


p1 = u1.posts.create!(body: "Bundle")
p2 = u1.posts.create!(body: "Nice")
p3 = u2.posts.create!(body: "XFactor")
