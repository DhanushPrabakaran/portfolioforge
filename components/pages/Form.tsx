import Head from 'next/head';

const Form = () => {
  return (
    <>
      <Head>
        <title>Create New Location</title>
      </Head>
      <div className="h-full w-full flex items-center justify-center" style={{ background: '#edf2f7' }}>
        <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
          <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
            <section className="bg-cream-lighter p-4 shadow">
              <div className="md:flex">
                <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Create New Location</h2>
              </div>
              <form>
                <div className="md:flex mb-8">
                  <div className="md:w-1/3">
                    <legend className="uppercase tracking-wide text-sm">Location</legend>
                    <p className="text-xs font-light text-red">This entire section is required.</p>
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div className="mb-4">
                      <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                      <input className="w-full shadow-inner p-4 border-0" type="text" name="name" placeholder="Acme Mfg. Co." />
                    </div>
                    <div className="md:flex mb-4">
                      <div className="md:flex-1 md:pr-3">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Street Address</label>
                        <input className="w-full shadow-inner p-4 border-0" type="text" name="address_street" placeholder="555 Roadrunner Lane" />
                      </div>
                      <div className="md:flex-1 md:pl-3">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Building/Suite No.</label>
                        <input className="w-full shadow-inner p-4 border-0" type="text" name="address_number" placeholder="#3" />
                        <span className="text-xs mb-4 font-thin">We lied, this isn{"'"}t required.</span>
                      </div>
                    </div>
                    <div className="md:flex mb-4">
                      <div className="md:flex-1 md:pr-3">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Latitude</label>
                        <input className="w-full shadow-inner p-4 border-0" type="text" name="lat" placeholder="30.0455542" />
                      </div>
                      <div className="md:flex-1 md:pl-3">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Longitude</label>
                        <input className="w-full shadow-inner p-4 border-0" type="text" name="lon" placeholder="-99.1405168" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex mb-8">
                  <div className="md:w-1/3">
                    <legend className="uppercase tracking-wide text-sm">Contact</legend>
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div className="mb-4">
                      <label className="block uppercase tracking-wide text-xs font-bold">Phone</label>
                      <input className="w-full shadow-inner p-4 border-0" type="tel" name="phone" placeholder="(555) 555-5555" />
                    </div>
                    <div className="mb-4">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">URL</label>
                      <input className="w-full shadow-inner p-4 border-0" type="url" name="url" placeholder="acme.co" />
                    </div>
                    <div className="mb-4">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Email</label>
                      <input className="w-full shadow-inner p-4 border-0" type="email" name="email" placeholder="contact@acme.co" />
                    </div>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <legend className="uppercase tracking-wide text-sm">Social</legend>
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div className="md:flex mb-4">
                      <div className="md:flex-1 md:pr-3">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Facebook</label>
                        <div className="w-full flex">
                          <span className="text-xs py-4 px-2 bg-grey-light text-grey-dark">facebook.com/</span>
                          <input className="flex-1 shadow-inner p-4 border-0" type="text" name="facebook" placeholder="acmeco" />
                        </div>
                      </div>
                      <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Twitter</label>
                        <div className="w-full flex">
                          <span className="text-xs py-4 px-2 bg-grey-light text-grey-dark">twitter.com/</span>
                          <input className="flex-1 shadow-inner p-4 border-0" type="text" name="twitter" placeholder="acmeco" />
                        </div>
                      </div>
                    </div>
                    <div className="md:flex mb-4">
                      <div className="md:flex-1 md:pr-3">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Instagram</label>
                        <div className="w-full flex">
                          <span className="text-xs py-4 px-2 bg-grey-light text-grey-dark">instagram.com/</span>
                          <input className="flex-1 shadow-inner p-4 border-0" type="text" name="instagram" placeholder="acmeco" />
                        </div>
                      </div>
                      <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Yelp</label>
                        <div className="w-full flex">
                          <span className="text-xs py-4 px-2 bg-grey-light text-grey-dark">yelp.com/</span>
                          <input className="flex-1 shadow-inner p-4 border-0" type="text" name="yelp" placeholder="
                        acmeco" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex mb-6">
                  <div className="md:w-1/3">
                    <legend className="uppercase tracking-wide text-sm">Description</legend>
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <textarea className="w-full shadow-inner p-4 border-0" placeholder="We build fine acmes."  ></textarea>
                  </div>
                </div>
                <div className="md:flex mb-6">
                  <div className="md:w-1/3">
                    <legend className="uppercase tracking-wide text-sm">Cover Image</legend>
                  </div>
                  <div className="md:flex-1 px-3 text-center">
                    <div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
                      <input className="opacity-0 absolute pin-x pin-y" type="file" name="cover_image" />
                      Add Cover Image
                    </div>
                  </div>
                </div>
                <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                  <div className="md:flex-1 px-3 text-center md:text-right">
                    <input type="hidden" name="sponsor" value="0" />
                    <input className="button text-cream-lighter bg-brick hover:bg-brick-dark" type="submit" value="Create Location" />
                  </div>
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Form;
