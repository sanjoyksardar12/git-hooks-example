#!/usr/bin/env node

// # An example hook script to verify what is about to be pushed.  Called by "git
// # push" after it has checked the remote status, but before anything has been
// # pushed.  If this script exits with a non-zero status nothing will be pushed.
// #
// # This hook is called with the following parameters:
// #
// # $1 -- Name of the remote to which the push is being done
// # $2 -- URL to which the push is being done
// #
// # If pushing without using a named remote those arguments will be equal.
// #
// # Information about the commits which are being pushed is supplied as lines to
// # the standard input in the form:
// #
// #   <local ref> <local sha1> <remote ref> <remote sha1>
// #
// # This sample shows how to prevent push of commits where the log message starts
// # with "WIP" (work in progress).


console.log("in post checkout hooks");