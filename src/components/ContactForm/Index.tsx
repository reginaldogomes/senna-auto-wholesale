import { Button } from 'components/common/Button/Index'

export const ContactForm = () => {
    return (
        <div className="flex flex-col max-w-5xl m-auto">
            <h3 className="text-2xl text-blue text-center">
                <strong>Submit a question</strong>
            </h3>
            <p className="text-blue mt-4 text-center">
                If you can’t find what you need, please submit a question
                <br />
                through our contact form below & we’ll get back to you as soon
                as possible.
            </p>
            <form className="bg-yellow bg-opacity-5 py-10 mt-10 rounded-lg p-10">
                <div className="form-group mb-6">
                    <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Name"
                    ></input>
                </div>
                <div className="form-group mb-6">
                    <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Email address"
                    ></input>
                </div>
                <div className="form-group mb-6">
                    <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        placeholder="Message"
                    ></textarea>
                </div>
                <div className="form-group mb-6">
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select
                                className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label=".form-select-lg example"
                            >
                                <option selected>Open this select menu</option>
                                <option value="1">
                                    General (How Clutch Works, Payment Methods)
                                </option>
                                <option value="2">
                                    More information about a Clutch Vehicle
                                </option>
                                <option value="3">
                                    Post Purchase Support/90-Day Guarantee
                                    Claims
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <Button title="Send Message" />
            </form>
        </div>
    )
}
