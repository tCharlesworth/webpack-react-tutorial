# webpack-react-tutorial
A tutorial repository for learning how to setup webpack for a react project with the babel loader
How to setup your first React project with webpack and babel-loader

This tutorial expects a simple understanding of Node and NPM. Please Note that the files in the master
branch contain a working solution to this project and are not intended to be a starting point to complete
this tutorial.

First thing you need to do is create a folder to hold all the project files. Once you have a folder created
we are going to do some basic folder structuring. Because we are using webpack we are going to put all of
our source code in one file and then webpack will compile our code and ouput it in a different file for
us. Make a folder called 'app' to hold our code and also make another folder called 'public' for webpack to 
put our compiled code into.

In our 'app' folder, lets make our first file call 'App.js'. This is the main file we will give to webpack
to start the compiling from. It is like an index file for react. The other file we need to make will be in
our root project folder and it will be 'webpack.config.js'. This is the configuration file for webpack
where we can tell webpack what we want it to do for us. Lets write some configuration in the file.
The first thing we need is:

	module.exports = {};

In this object we will define all the configuration settings. First we need to tell webpack where our
'entry' is. In other words, where are all the source code files. We do that by changing our first line
to look like this:

	module.exports = {
		entry: './app/App.js'
	}

The value of entry is a string representing the location of our app js file. Next we need to define where
we want webpack to output our compiled files. We do that by adding a 'output' object with filename key to 
the configuration object. Now this should look like this:

	module.exports = {
		entry: './app/App.js',
		output: {filename: 'public/bundle.js'}
	}

Next thing you will want to do is configure the loaders. In this tutorial I have decided that I want webpack
to run a loader called babel-loader, so I will add the configuration information for the loader in the configuration
object, so my config file now looks like this:

	module.exports = {
		entry: './app/App.js',
		output: {filename: 'public/bundle.js'},
		module: {
			loaders: [
				{test: /\.js$/, exclude: /node_modules, loader: 'babel-loader'}
			]
		}
	}

So the loaders is an array of objects, each object containing information about the loader we want to run. We
can have multiple loaders and we would just add them to this array. In this example we user 2 keys to describe
our loader. The 'loader' key to tell the loader which matches the package name we will use in npm to install
the loader, as well as a 'test' key. The test key is a regex expression that defines which files to apply
the loader to. In this instance we will run the babel-loader on any file with the ending '.js'. We are also
using and 'exclude' key to tell the loader not to worry about anything in our 'node_modules' folder. This concludes
setting up our webpack configuration. For more configuration options I suggest looking at the webpack configuration
documentation that can be found at https://webpack.github.io/docs/configuration.html.

The next thing we need to do is setup node. Open a terminal/command prompt and navigate to our project folder.
Once you are there you should run the command 'npm init'. Fill in the basic details and this should have
created a package.json file, and a node_modules folder. Now we can install all the packages we want to use.
First lets install webpack. We will use the '--save-dev' flag to tell npm that this dependency is for 
development purposes.

	npm install webpack --save-dev

We also need to install the 'babel-loader', also with the developer flag

	npm install babel-loader --save-dev

At this point if you are going to install any dependencies for your app, such as react, we can also do this
at this point and we will use the '--save' flag because these are for running the app, not developing the app.

	npm install react react-dom --save

At this point all your setup is done. If you run the 'webpack' command from your root project directory and it 
will compile all our code with no errors. If you get an error saying 'webpack command not found' then you will
need to install webpack globally using the following command

	npm install webpack -g

One last tip to running webpack is the -w flag. If you use the '-w' flag with your webpack command you will
not need to run the webpack command manually, it will run automatically while that terminal is open. This
is very handy because webpack will watch for changes in our files and recompile automatically when it finds
a change. Thats almost it! You have successfully setup webpack with a babel-loader.

Now to finish setting up our react app.
Here is some quick code you can place in your 'App.js' file. It makes a simple react component that renders
'Hello World' as an H2 heading on our webpage.

	var React = require('react');
	var ReactDOM = require('react-dom');
	var App = React.createClass({
	    render: function() {
	        return (
	            <h2>Hello World</h2>
	        )
	    }
	});
	ReactDOM.render(<App />, document.getElementById('app'));

Now we will add an 'index.html' file to our 'public' folder. It will have the following code:

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Webpack & React Setup Tutorial</title>
	</head>
	<body>
		<div id='app'></div>
	    <script src='./bundle.js'></script>
	</body>
	</html>

Lets run webpack to compile our code one more time. Now if we open our index.html file it will display 
'Hello World' on the webpage.

Thats it! Now you have a simple react application that is compiled with webpack and babel-loader.
