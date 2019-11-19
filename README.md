# unbundled-builds
A generic, documented way of doing unbundled web component builds and integrations. This way you can leverage your elements across CMSs and applications in a performant and scalable way.

## Install
Make sure you have a version of node >=6.0 and above.
Verify that you have yarn enabled — if not [install yarn](https://yarnpkg.com/lang/en/docs/install/) and ensure it is [globally available via PATH](https://yarnpkg.com/lang/en/docs/cli/global/).
```bash
$ yarn global add polymer-cli
$ git clone https://github.com/elmsln/unbundled-builds.git
$ cd unbundled-builds
```

## Usage
In the `unbundled-builds` folder and edit `dist/build-all.js` to include references to your `.js` web component files that you want to use across your projects. You can modify `dist/entry.js` to include things in EVERY website while `build-all` is for having access to everything to ensure the files are built in a way that will work across platforms.

```bash
$ yarn run build
```
Now you'll have the files in `build/` that work anywhere in all browsers as long as you integrate it in the standard way we recommend!

## Integration
We have several boilerplate integrations listed in the `integration-boilerplate` directory to help you get the assets up into your production environment. We believe in clientside detection methods to serve the fastest build possible to users per their environment. To do this, our integration looks a bit messy but it's been battle tested across multiple contexts and incentivizes performance in the latest and greatest browsers, while still working in the oldest.

### Notes about these integrations
- These are boilerplate, modify them to match your context but be mindful of the integrations associated with finding the right JS file to load
- There's a "cdn" / section at the bottom that references where it lives on the server / domain. If this changes in your deployed environment then you'll want to modify these.
- Effectively these are all modifications to the `integration-boilerplate/Static` integration methodology so fork from there as you like.
  - If you'd like to see other integrations, just ask and we'll try