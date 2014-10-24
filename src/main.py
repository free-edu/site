import webapp2

app = webapp2.WSGIApplication([
	webapp2.Route('/', webapp2.RedirectHandler, default={'_uri': '/index.html'}),
], debug=True)