import * as Accordion from "@radix-ui/react-accordion";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Avatar from "@radix-ui/react-avatar";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Label from "@radix-ui/react-label";
import * as Progress from "@radix-ui/react-progress";
import * as Select from "@radix-ui/react-select";
import * as Slider from "@radix-ui/react-slider";
import * as Tabs from "@radix-ui/react-tabs";
import * as Toast from "@radix-ui/react-toast";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function KitchenSink() {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <Toast.Provider swipeDirection="right">
        <div className="space-y-8">
          {/* Typography */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Typography</h1>
            <div className="space-y-4">
              <h1 className="text-6xl">Heading 6xl</h1>
              <h2 className="text-5xl">Heading 5xl</h2>
              <h3 className="text-4xl">Heading 4xl</h3>
              <h4 className="text-3xl">Heading 3xl</h4>
              <h5 className="text-2xl">Heading 2xl</h5>
              <h6 className="text-xl">Heading xl</h6>
              <p className="text-lg">Text lg</p>
              <p className="text-base">Text base</p>
              <p className="text-sm">Text sm</p>
              <p className="text-xs">Text xs</p>
            </div>
          </div>

          <hr className="my-8" />

          {/* Buttons */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Buttons</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Blue
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Green
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Red
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Yellow
                </button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded">
                  Purple
                </button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded">
                  Pink
                </button>
              </div>
              <div className="flex gap-4">
                <button className="border border-gray-300 px-4 py-2 rounded">
                  Outline
                </button>
                <button className="hover:bg-gray-100 px-4 py-2 rounded">
                  Ghost
                </button>
                <button className="text-blue-500 underline">Link</button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">
                  Solid
                </button>
              </div>
              <div className="flex gap-4">
                <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                  xs
                </button>
                <button className="text-sm bg-blue-500 text-white px-3 py-1.5 rounded">
                  sm
                </button>
                <button className="text-base bg-blue-500 text-white px-4 py-2 rounded">
                  md
                </button>
                <button className="text-lg bg-blue-500 text-white px-5 py-2.5 rounded">
                  lg
                </button>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Form Elements */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Form Elements</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Basic input"
                className="w-full px-4 py-2 border rounded"
              />
              <textarea
                placeholder="Textarea"
                className="w-full px-4 py-2 border rounded"
              />
              <Select.Root defaultValue="option1">
                <Select.Trigger className="w-full px-4 py-2 border rounded flex items-center justify-between">
                  <Select.Value placeholder="Select option" />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="bg-white border border-gray-200 rounded-lg shadow-lg p-1 min-w-[200px]">
                    <Select.Viewport>
                      <Select.Group>
                        <Select.Label className="px-2 py-1 text-sm text-gray-500">
                          Options
                        </Select.Label>
                        <Select.Item
                          value="option1"
                          className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer flex items-center justify-between"
                        >
                          <Select.ItemText>Option 1</Select.ItemText>
                          <Select.ItemIndicator>
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item
                          value="option2"
                          className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer flex items-center justify-between"
                        >
                          <Select.ItemText>Option 2</Select.ItemText>
                          <Select.ItemIndicator>
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item
                          value="option3"
                          className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer flex items-center justify-between"
                        >
                          <Select.ItemText>Option 3</Select.ItemText>
                          <Select.ItemIndicator>
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                      </Select.Group>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="checkbox" />
                <Label.Root htmlFor="checkbox">Checkbox</Label.Root>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="radio" name="radio" id="radio1" />
                  <Label.Root htmlFor="radio1">Radio 1</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="radio" id="radio2" />
                  <Label.Root htmlFor="radio2">Radio 2</Label.Root>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" role="switch" />
                <Label.Root>Switch</Label.Root>
              </div>
              <Slider.Root className="relative flex items-center w-full h-5">
                <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
                  <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </Slider.Root>
              <Progress.Root className="relative overflow-hidden bg-gray-200 rounded-full w-full h-2">
                <Progress.Indicator
                  className="bg-blue-500 w-full h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: "translateX(-20%)" }}
                />
              </Progress.Root>
            </div>
          </div>

          <hr className="my-8" />

          {/* Cards */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Cards</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-xl font-semibold">Card Header</h3>
                </div>
                <div className="p-4">
                  <p>Card Body</p>
                </div>
                <div className="p-4 border-t">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Card Footer
                  </button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4">
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
                    alt="Green double couch with wooden legs"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="mt-6 space-y-3">
                    <h3 className="text-xl font-semibold">Living room Sofa</h3>
                    <p>This sofa is perfect for modern tropical spaces.</p>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Buy now
                    </button>
                    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Badges and Tags */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Badges and Tags</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="px-2 py-1 text-xs font-semibold bg-gray-100 rounded">
                  Default
                </span>
                <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded">
                  Success
                </span>
                <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded">
                  Error
                </span>
                <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                  Warning
                </span>
              </div>
              <div className="flex gap-4">
                <span className="inline-flex items-center px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                  Blue
                  <button className="ml-1 hover:text-blue-600">×</button>
                </span>
                <span className="inline-flex items-center px-2 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded">
                  Green
                  <button className="ml-1 hover:text-green-600">×</button>
                </span>
                <span className="inline-flex items-center px-2 py-1 text-base font-semibold bg-red-100 text-red-800 rounded">
                  Red
                  <button className="ml-1 hover:text-red-600">×</button>
                </span>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Avatars */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Avatars</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden">
                  <Avatar.Image
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abrahmov"
                  />
                  <Avatar.Fallback className="w-full h-full bg-gray-200 flex items-center justify-center">
                    DA
                  </Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden">
                  <Avatar.Image
                    src="https://bit.ly/tioluwani-kolawole"
                    alt="Kola Tioluwani"
                  />
                  <Avatar.Fallback className="w-full h-full bg-gray-200 flex items-center justify-center">
                    KT
                  </Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden">
                  <Avatar.Image
                    src="https://bit.ly/kent-c-dodds"
                    alt="Kent Dodds"
                  />
                  <Avatar.Fallback className="w-full h-full bg-gray-200 flex items-center justify-center">
                    KD
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>
              <div className="flex -space-x-2">
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <Avatar.Image
                    src="https://bit.ly/ryan-florence"
                    alt="Ryan Florence"
                  />
                  <Avatar.Fallback className="w-full h-full bg-gray-200 flex items-center justify-center">
                    RF
                  </Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <Avatar.Image
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
                  />
                  <Avatar.Fallback className="w-full h-full bg-gray-200 flex items-center justify-center">
                    SA
                  </Avatar.Fallback>
                </Avatar.Root>
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <Avatar.Image
                    src="https://bit.ly/kent-c-dodds"
                    alt="Kent Dodds"
                  />
                  <Avatar.Fallback className="w-full h-full bg-gray-200 flex items-center justify-center">
                    KD
                  </Avatar.Fallback>
                </Avatar.Root>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                  +2
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Alerts */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Alerts</h2>
            <div className="space-y-4">
              <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded">
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  <div>
                    <p className="font-bold">Success!</p>
                    <p>Your application has been submitted.</p>
                  </div>
                </div>
              </div>
              <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded">
                <div className="flex items-center">
                  <span className="mr-2">✕</span>
                  <div>
                    <p className="font-bold">Error!</p>
                    <p>There was an error processing your request.</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded">
                <div className="flex items-center">
                  <span className="mr-2">⚠</span>
                  <div>
                    <p className="font-bold">Warning!</p>
                    <p>Please review your information before proceeding.</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-400 text-blue-800 px-4 py-3 rounded">
                <div className="flex items-center">
                  <span className="mr-2">ℹ</span>
                  <div>
                    <p className="font-bold">Info!</p>
                    <p>Your session will expire in 5 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Interactive Components */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Interactive Components</h2>
            <div className="space-y-4">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Open Modal
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                  <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md">
                    <Dialog.Title className="text-xl font-semibold mb-4">
                      Modal Title
                    </Dialog.Title>
                    <Dialog.Description className="mb-4">
                      Modal content goes here...
                    </Dialog.Description>
                    <div className="flex justify-end gap-2">
                      <Dialog.Close asChild>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                          Close
                        </button>
                      </Dialog.Close>
                      <button className="border border-gray-300 px-4 py-2 rounded">
                        Secondary Action
                      </button>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <Tabs.Root defaultValue="tab1">
                <Tabs.List className="flex border-b">
                  <Tabs.Trigger
                    value="tab1"
                    className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300"
                  >
                    One
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab2"
                    className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300"
                  >
                    Two
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="tab3"
                    className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300"
                  >
                    Three
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1" className="p-4">
                  <p>Tab 1 content</p>
                </Tabs.Content>
                <Tabs.Content value="tab2" className="p-4">
                  <p>Tab 2 content</p>
                </Tabs.Content>
                <Tabs.Content value="tab3" className="p-4">
                  <p>Tab 3 content</p>
                </Tabs.Content>
              </Tabs.Root>

              <Accordion.Root type="single" collapsible>
                <Accordion.Item value="item-1">
                  <Accordion.Trigger className="flex justify-between w-full px-4 py-2 text-left">
                    Section 1 title
                    <ChevronDownIcon className="transform transition-transform duration-200" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-4 py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-2">
                  <Accordion.Trigger className="flex justify-between w-full px-4 py-2 text-left">
                    Section 2 title
                    <ChevronDownIcon className="transform transition-transform duration-200" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-4 py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="bg-white border border-gray-300 px-4 py-2 rounded flex items-center gap-2">
                    Actions
                    <ChevronDownIcon />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="bg-white border border-gray-200 rounded-lg shadow-lg p-1 min-w-[200px]">
                    <DropdownMenu.Group>
                      <DropdownMenu.Label className="px-2 py-1 text-sm text-gray-500">
                        Profile
                      </DropdownMenu.Label>
                      <DropdownMenu.Item className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                        My Account
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                        Payments
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                    <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
                    <DropdownMenu.Group>
                      <DropdownMenu.Label className="px-2 py-1 text-sm text-gray-500">
                        Help
                      </DropdownMenu.Label>
                      <DropdownMenu.Item className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                        Docs
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                        FAQ
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Hover me
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                      sideOffset={5}
                    >
                      Hey, I'm a tooltip!
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>

              <Toast.Root
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-start gap-3"
                open={toastOpen}
                onOpenChange={setToastOpen}
              >
                <div className="flex-1">
                  <Toast.Title className="font-semibold">Success!</Toast.Title>
                  <Toast.Description className="text-gray-600">
                    Your action was completed successfully.
                  </Toast.Description>
                </div>
                <Toast.Close className="text-gray-400 hover:text-gray-600">
                  ✕
                </Toast.Close>
              </Toast.Root>

              <button
                onClick={() => setToastOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Show Toast
              </button>
            </div>
          </div>
        </div>
        <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-[390px] max-w-[100vw] m-0 z-50 outline-none" />
      </Toast.Provider>
    </div>
  );
}

export default KitchenSink;
