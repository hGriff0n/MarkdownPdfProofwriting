/***
 * Run pandoc formatting to export a pdf of the current markdown file to my OneDrive boox folder
 */
const subProcess = require('child_process');

async function exportToBoox(params) {
    const thisFile = params.app.workspace.lastActiveFile;
    console.log(thisFile);
    const fullpath = `${thisFile.vault.adapter.basePath}\\${thisFile.path}`;
    
    if (thisFile.parent.name != "drafts") {
        new Notice(`Exporting to Boox is only supported from a 'drafts' folder`, 1500);
        return;
    }

    const outpath = `C:\\Users\\ghoop\\OneDrive\\onyx\\NoteAir4C\\Notebooks\\${thisFile.parent.parent.name}.pdf`;
    new Notice(`Exporting ${thisFile.path} to Boox`, 1500);
    subProcess.exec(`pandoc "${fullpath}" -f markdown --wrap=none -t pdf --pdf-engine=typst -V template=typst.template -o "${outpath}"`, (err, stdout, stderr) => {
        if (err) {
            console.log(stderr.toString());
            new Notice(`Export failed: ${stderr.toString()}`);
        } else {
            new Notice(`Exported file to ${thisFile.parent.parent.name}.pdf`);
        }
    });
}

module.exports = exportToBoox;
