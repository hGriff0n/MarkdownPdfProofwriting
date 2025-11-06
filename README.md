This repository contains two workflows that I have found useful for personal creative writing. These workflows are intended to utilise eInk digital notebooks as an editing and revising medium, while keep the core document in markdown.

## Proofreading Markups to Markdown

In practice, I have found that the hardest part of writing on the computer has been revising my work, especially with more creative goals that may require a lot of rearrangement or the complete elimination of some sections. However,
when I hit on the idea of exporting the markdown writing to a pdf and then loading that on my digital notebook (a Boox 4c Air), I had a lot more success with making measurable progress towards completing stories. However, this produced
a new issue about porting the editing work I had done back to markdown, especially as the pdf started to get cluttered with hand notes. 

The issue is entirely one of tedium, which introduces a lot of chances for mistakes to creep in. So what this workflow does is utilize multi-modal AI to detect and categorize the handwritten proofreading marks and to then apply them on
top of the original markdown document, automating the transcription process and allowing the focus to stay in the crreative realm.

TODO: Can I make a similar command to run the ai workflow to create a new draft file from the annotated pdf??

# Markdown to PDF Export

The other side of the workflow is to get the markdown files from the computer to the digital notebook. This involves exporting the markdown to a pdf, but although there are several decent options available online, they have one crucial flaw - you don't have a lot of control over what the pdf looks like.

This is a problem as the specific tool I use may not add enough space between text lines for me to write editing marks, or at least legible ones. So instead, I use pandoc and typst (following https://neilzone.co.uk/2025/01/using-pandoc-and-typst-to-convert-markdown-into-custom-formatted-pdfs-with-a-sample-template/) to handle this export. Although there are python libraries for both available, the pandoc library does not seem to export the ability to chose a pdf engine, crucial because the default is the latex engine. As such, pandoc and typst have to be manually installed to work.

My personal organization uses Obsidian to store the markdown files of in progress drafts, so I have chosen to create a simple `QuickAdd` command that will run the pandoc export routine on the current file. Currently, this requires a fair bit of manual setup because pandoc seems to always interpret the `template` argument in terms of the current active directory. As such, the `typst.template` file needs to be manually copied to the Obsidian local directory (this can be determined by running the command once and viewing the error message reported by the console).

The command requires that the path of the current active file **must** be something of the form `../{project}/{drafts}/{activeFile}.md`. This structure is required so we can better name the exported pdf to something meaningful (ie. the project) instead of something like "draft 1".

NOTE: The onedrive sync with Boox still requires me to manually download the file from one drive. This involves going into the library, selecting the cloud providers, navigating to my boox directory, and then downloading the files. Unfortunately, you cannot simplify this process. Once downloaded the files do appear in a separate folder in the "bookshelf" view of the library
