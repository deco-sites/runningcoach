interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return (
    <div class="lg:container md:max-w-4xl lg:mx-auto mx-4 text-sm flex justify-center items-center min-h-[30vh]">
      <div
        id="sign-up"
        class="flex flex-col items-center gap-6 text-center pt-8 pb-8 w-full max-w-lg"
      >
        <div id="getWaitlistContainer" data-waitlist_id="21674" data-widget_type="WIDGET_1"></div>
        <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css" />
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </div>
    </div>
  );
}
