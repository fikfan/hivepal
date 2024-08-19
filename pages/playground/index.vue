<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Component Playground</h1>
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Typography</h2>
      <div class="space-y-2">
        <h1 class="text-4xl font-bold">Heading 1</h1>
        <h2 class="text-3xl font-semibold">Heading 2</h2>
        <h3 class="text-2xl font-medium">Heading 3</h3>
        <p class="text-base">Regular paragraph text</p>
        <p class="text-sm">Small text</p>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Form Elements</h2>

      <h2 class="text-2xl font-semibold mb-4">Text inputs</h2>
      <div class="space-y-4 max-w-md">
        <Input placeholder="Text input" />
        <Textarea placeholder="Textarea" />


        <h2 class="text-2xl font-semibold mb-4">Checkboxes</h2>
        <div class="items-top flex gap-x-2">
          <Checkbox id="terms1" />
          <div class="grid gap-1.5 leading-none">
            <label
              for="terms1"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
            <p class="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

        <h2 class="text-2xl font-semibold mb-4">Radio Groups</h2>
        <RadioGroup defaultValue="option-one">
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>

        <h2 class="text-2xl font-semibold mb-4">Selects</h2>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                Apple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Cards</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content of the card.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
        <!-- Add more card variations as needed -->
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Alerts</h2>
      <div class="space-y-4">
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            This is a default alert. You can use it to show some important information.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            This is a destructive alert. Use it for error messages or critical warnings.
          </AlertDescription>
        </Alert>
      </div>
    </section>

  </div>
</template>